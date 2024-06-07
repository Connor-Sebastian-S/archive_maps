// Layers
var mainOverlayLayers = {

    "1747": L.tileLayer('data/1747/{z}/{x}/{y}.png', {
        attribution: "Produced by x in 1747, as part of x",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1823": L.tileLayer('data/1823/{z}/{x}/{y}.png', {
        attribution: "Produced by x in 1823, as part of x",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1864": L.tileLayer('https://api.maptiler.com/tiles/uk-osgb10k1888/{z}/{x}/{y}.jpg?key=wv0AU1AXH7akvUkNUgLx', {
        attribution: "Perthshire, Sheet LXII, Survey date: 1864, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1945": L.tileLayer('https://mapseries-tilesets.s3.amazonaws.com/os/25000_outline/{z}/{x}/{y}.png', {       
        attribution: "Great Britain - OS 1:25,000 (Outline), 1945-65, produced by Ordnance Survey",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1965": L.tileLayer('https://api.maptiler.com/tiles/uk-osgb25k1937/{z}/{x}/{y}.jpg?key=wv0AU1AXH7akvUkNUgLx', {
        attribution: "NO04, Revised: 1938 - 1955, Published: 1957, produced by Ordnance Survey",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "2024": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Map data &copy; OpenStreetMap contributors",
        
        maxZoom: 17,
        maxNativeZoom: 19
    })
};

var alternativeOverlayLayers = {

    "1747": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 1747 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1823": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 1823 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1864": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 1864 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1945": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 1945 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "1965": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 1965 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    }),
    "2024": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: "Alternative 2024 Map",
        
        maxZoom: 17,
        maxNativeZoom: 19
    })
};
