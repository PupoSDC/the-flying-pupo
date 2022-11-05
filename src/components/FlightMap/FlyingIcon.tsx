import { memo, useEffect, useMemo, useRef } from "react";
import { Marker } from "react-leaflet";
import { Icon, Polyline as PolylineRef, Marker as MarkerRef } from "leaflet";
import { Polyline } from "react-leaflet";
import { RawFlight, TrackEntity } from "src/types/Flight";
import planeIcon from "./FlyingIcon.png";

import "leaflet-rotatedmarker";

type FlyingIconProps = Pick<RawFlight, "track"> & {
  onClick?: () => void;
};

type LagrangeInterpolation = (pointsY: number[], x: number) => number;

/**
 * Lazily calculates the interpolation values using Lagrange Interpolation.
 * The factory step only takes x coordinates (timestaps in this case) which
 * are common to all the data points we will be processing, while the second
 * step takes y coordinates.
 *
 * @param pointsX the X coordinates (timestaps in this case)
 */
const lagrangeInterpolationFactory = (
  pointsX: number[]
): LagrangeInterpolation => {
  const k = pointsX.length;
  const weights: number[] = [];
  for (let j = 0; j < k; ++j) {
    let w = 1;
    for (var i = 0; i < k; ++i) {
      if (i !== j) {
        w *= pointsX[j] - pointsX[i];
      }
    }
    weights[j] = 1 / w;
  }
  return (pointsY: number[], x) => {
    if (pointsX.length > pointsY.length) {
      throw new Error("Disparity between pointsX and pointsY length ");
    }
    let a = 0,
      b = 0,
      c = 0;
    for (let j = 0; j < pointsX.length; ++j) {
      if (x === pointsX[j]) return pointsY[j];
      a = weights[j] / (x - pointsX[j]);
      b += a * pointsY[j];
      c += a;
    }
    return b / c;
  };
};

/**
 * Applies a Lagrange interpolation to all fields that can be interpolated in a track
 * point. make sure
 */
const mapInterpolationToTrackEntity = (
  interpolation: LagrangeInterpolation,
  track: TrackEntity[],
  timestamp: number
): TrackEntity => ({
  latitude: interpolation(
    track.map((t) => t.latitude),
    timestamp
  ),
  longitude: interpolation(
    track.map((t) => t.longitude),
    timestamp
  ),
  heading: interpolation(
    track.map((t) => t.heading),
    timestamp
  ),
  altitude: {
    feet: interpolation(
      track.map((t) => t.altitude.feet),
      timestamp
    ),
    meters: interpolation(
      track.map((t) => t.altitude.meters),
      timestamp
    ),
  },
  speed: {
    kmh: interpolation(
      track.map((t) => t.speed.kmh),
      timestamp
    ),
    kts: interpolation(
      track.map((t) => t.speed.kts),
      timestamp
    ),
    mph: interpolation(
      track.map((t) => t.speed.mph),
      timestamp
    ),
  },
  verticalSpeed: {
    fpm: interpolation(
      track.map((t) => t.verticalSpeed.fpm),
      timestamp
    ),
    ms: interpolation(
      track.map((t) => t.verticalSpeed.ms),
      timestamp
    ),
  },
  squawk: track[0].squawk,
  ems: track[0].ems,
  timestamp,
});

/**
 *
 * @param track the original flight track (min 2 points)
 * @param speed the speed multiplier (i.e.: 60 for 1 minute per second)
 * @return the interpolated track with 20 points per second.
 * */
const interpolateTrack = (
  track: TrackEntity[],
  speed: number
): TrackEntity[] => {
  const timeStep = (1 / 40) * speed;
  const endTime = track[track.length - 1].timestamp;
  const result = [track[0]];

  let currentTime = track[0].timestamp;
  let firstIndex = 0;
  let interpolate = lagrangeInterpolationFactory([
    track[firstIndex].timestamp,
    track[firstIndex + 1].timestamp,
  ]);

  while (currentTime < endTime) {
    if (
      firstIndex + 3 < track.length &&
      currentTime > track[firstIndex + 1].timestamp
    ) {
      firstIndex++;
      interpolate = lagrangeInterpolationFactory([
        track[firstIndex].timestamp,
        track[firstIndex + 1].timestamp,
      ]);
    }
    const newTrackPoint = mapInterpolationToTrackEntity(
      interpolate,
      track.slice(firstIndex, firstIndex + 3),
      currentTime
    );
    result.push(newTrackPoint);
    currentTime = currentTime + timeStep;
  }
  return result;
};

/**
 * Displays a flight track with a small cute icon following the track
 */
export const FlyingIcon = memo<FlyingIconProps>(({ track }) => {  
  const markerRef = useRef<MarkerRef>(null);
  const polyLineRef = useRef<PolylineRef>(null);
  const path = useMemo(
    () =>
      interpolateTrack(track, 45)
        .filter((point) => !isNaN(point.latitude))
        .map((point) => ({
          lat: point.latitude,
          lng: point.longitude,
          angle: point.heading,
        })),
    [track]
  );

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const updatePosition = () => {
      i = ++i % path.length;

      if (i === 0) {
        polyLineRef.current?.setLatLngs([]);
      }

      // @ts-ignore defined in leaflet-rotatedmarker
      markerRef.current?.setRotationAngle(path[i].angle);
      markerRef.current?.setLatLng(path[i]);
      polyLineRef.current?.addLatLng(path[i]);
      timeout = setTimeout(updatePosition, 50);
    };
    updatePosition();
    return () => clearTimeout(timeout);
  }, [path]);

  return (
    <>
      <Polyline positions={path} color={"blue"} />
      <Polyline
        ref={polyLineRef}
        positions={[path[0]]}
        color={"red"}
      />
      <Marker
        ref={markerRef}
        icon={
          new Icon({
            iconUrl: planeIcon.src,
            iconSize: [12, 12],
            iconAnchor: [6, 6],
          })
        }
        // @ts-ignore
        rotationAngle={45}
        position={path[0]}
      />
    </>
  );
});
