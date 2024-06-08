// Layers
var mainOverlayLayers = {

    "1747": L.tileLayer('data/original/1747-1752/{z}/{x}/{y}.png', {
        attribution: "Produced by x in 1747, as part of x",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1843": L.tileLayer('data/original/1843-1882/{z}/{x}/{y}.png', {
        attribution: "Produced by x in 1823, as part of x",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1888": L.tileLayer('data/original/1888-1913/{z}/{x}/{y}.png', {
        attribution: "Perthshire, Sheet LXII, Survey date: 1864, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1926": L.tileLayer('data/original/1926-1935/{z}/{x}/{y}.png', {
        attribution: "Perthshire, Sheet LXII, Survey date: 1864, Publication date: 1867, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1937": L.tileLayer('data/original/1937-1961/{z}/{x}/{y}.png', {       
        attribution: "Great Britain - OS 1:25,000 (Outline), 1945-65, produced by Ordnance Survey",
        
        maxZoom: 18,
        maxNativeZoom: 16
    }),
    "1961": L.tileLayer('data/original/1961-2024/{z}/{x}/{y}.png', {
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
    "1843": L.tileLayer('data/redrawn_maps/BASIC/{z}/{x}/{y}.png', {
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
