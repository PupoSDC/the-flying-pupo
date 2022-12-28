const skyvector = "";

console.log(JSON.stringify(skyvector.split("\n").map(b => b.split(" ")).map(c => ({
    "latitude": Number(c[2]),
    "longitude": Number(c[1]),
    "altitude": {
        "feet": Number(c[3]) / 3.28084,
        "meters": Number(c[3]),
    },
    "speed": {
        "kmh": 0,
        "kts": 0,
        "mph": 0,
    },
    "verticalSpeed": {
        "fpm": 0,
        "ms": 0
    },
    "heading": 0,
    "squawk": "0",
    "timestamp": Math.floor(new Date(c[0]).getTime() / 1000),
    "ems": null
})), null, 2))