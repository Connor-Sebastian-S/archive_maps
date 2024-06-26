// Layers
var mainOverlayLayers = {
    "1650": L.tileLayer('data/redrawn_maps/beginning/{z}/{x}/{y}.png', {
        attribution: "In the beginning, there was nought but rivers and forests",
        
        maxZoom: 18,
        maxNativeZoom: 18
    }),
    "1747": L.tileLayer('data/original_maps/1747-1752/{z}/{x}/{y}.png', {
        attribution: "Roy Military Survey of Scotland, 1747-55",
        
        maxZoom: 18,
        maxNativeZoom: 18
    }),
    "1780": L.tileLayer('data/original_maps/1780-1847/{z}/{x}/{y}.png', {
        attribution: "John Wood, 1780-1847, Plan of Dunkeld and Locale",
        
        maxZoom: 18,
        maxNativeZoom: 18
    }),
    "1856": L.tileLayer('data/original_maps/1856-1891/{z}/{x}/{y}.png', {
        attribution: "One-inch, Scotland, 1st Edition, 1856-1891, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 15
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
        maxNativeZoom: 15
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
    "1650": L.tileLayer('https://{s}.tile.openhistoricalmap.org/ohm/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://www.openhistoricalmap.org">OpenHistoricalMap</a>'
        })
};
