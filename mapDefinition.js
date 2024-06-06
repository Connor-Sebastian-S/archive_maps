// Layers
var mainOverlayLayers = {

    "1747": L.tileLayer('data/1747/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9, tms: false,
        attribution: "Produced by x in 1747, as part of x"
    }),
    "1823": L.tileLayer('data/1823/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9, tms: false,
        attribution: "Produced by x in 1823, as part of x"
    }),
    "1864": L.tileLayer('https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=wv0AU1AXH7akvUkNUgLx', {
        minZoom: 15, minZoom: 9,
        attribution: "Perthshire, Sheet LXII, Survey date: 1864, Publication date: 1867, produced by Ordnance Survey"
    }),
    "1945": L.tileLayer('https://mapseries-tilesets.s3.amazonaws.com/os/25000_outline/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Great Britain - OS 1:25,000 (Outline), 1945-65, produced by Ordnance Survey"
    }),
    "1965": L.tileLayer('https://api.maptiler.com/tiles/uk-osgb25k1937/{z}/{x}/{y}.jpg?key=wv0AU1AXH7akvUkNUgLx', {
        minZoom: 15, minZoom: 9,
        attribution: "NO04, Revised: 1938 - 1955, Published: 1957, produced by Ordnance Survey"
    }),
    "2024": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Map data &copy; OpenStreetMap contributors"
    })
};

var alternativeOverlayLayers = {

    "1747": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9, tms: false,
        attribution: "Alternative 1747 Map"
    }),
    "1823": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9, tms: false,
        attribution: "Alternative 1823 Map"
    }),
    "1864": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Alternative 1864 Map"
    }),
    "1945": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Alternative 1945 Map"
    }),
    "1965": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Alternative 1965 Map"
    }),
    "2024": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 15, minZoom: 9,
        attribution: "Alternative 2024 Map"
    })
};
