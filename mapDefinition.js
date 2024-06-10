// Layers
var mainOverlayLayers = {

    "1747": L.tileLayer('data/original_maps/1747-1752/{z}/{x}/{y}.png', {
        attribution: "Roy Military Survey of Scotland, 1747-55",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1856": L.tileLayer('data/original_maps/1856-1891/{z}/{x}/{y}.png', {
        attribution: "One-inch, Scotland, 1st Edition, 1856-1891, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1864": L.tileLayer('data/original_maps/1830-1880/{z}/{x}/{y}.png', {
        attribution: "Perthshire LXII, Surveyed: 1864, Published: 1867, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1888": L.tileLayer('data/original_maps/1888-1913/{z}/{x}/{y}.png', {
        attribution: "Perth and Clackmannan LXII.NW, Surveyed: 1899, Published: 1901, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1926": L.tileLayer('data/original_maps/1926-1935/{z}/{x}/{y}.png', {
        attribution: "Bartholomew's Half Inch to the Mile Maps of Scotland, 1926-1935",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1937": L.tileLayer('data/original_maps/1937-1961/{z}/{x}/{y}.png', {       
        attribution: "1:25,000, Great Britain, 1937-1961, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1961": L.tileLayer('data/original_maps/1961-2024/{z}/{x}/{y}.png', {
        attribution: "NO04, Revised: 1938 - 1955, Published: 1957, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    })
};

var alternativeOverlayLayers = {

    "1747": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1747 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1856": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1856 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1864": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1843 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1888": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1888 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1926": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1926 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1937": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1937 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1961": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
        attribution: "Alternative 1961 Map",
        
        maxZoom: 18,
        maxNativeZoom: 16
    })
};
