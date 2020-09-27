import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { Flight } from "../../types/Flight";
import planeIcon from "./planeIcon.png";

import "leaflet-rotatedmarker";
import "./FlyingIcon.css";

const FlyingIcon: FunctionComponent<Pick<Flight, "track">> = ({ track }) => {
  const ref = useRef<Marker>();

  const getPoint = useCallback(
    (i: number) => ({
      lat: track[i].latitude,
      lng: track[i].longitude,
    }),
    [track]
  );

  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const updatePosition = () => {
      const oldPosition = getPoint(i);
      i = ++i % track.length;
      const newPosition = getPoint(i);

      const angle =
        (Math.atan2(
          newPosition.lng - oldPosition.lng,
          newPosition.lat - oldPosition.lat
        ) *
          180) /
        Math.PI;

      // @ts-ignore defined in leaflet-rotatedmarker
      ref.current?.leafletElement.setRotationAngle(angle);
      ref.current?.leafletElement.setLatLng(getPoint(i));
      timeout = setTimeout(updatePosition, 100);
    };
    updatePosition();
    return () => clearTimeout(timeout);
  }, [track, getPoint]);

  return (
    <Marker
      ref={(ref as unknown) as string}
      icon={
        new Icon({
          iconUrl: planeIcon,
          iconSize: [12, 12],
          iconAnchor: [6, 6],
        })
      }
      rotationAngle={45}
      position={getPoint(0)}
    />
  );
};

export default FlyingIcon;
