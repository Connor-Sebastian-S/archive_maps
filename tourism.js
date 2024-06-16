
    // Overpass layers - our POIs
    var plaques = new L.OverPassLayer({
        query: "node(BBOX)['memorial'='blue_plaque'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#33F',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var shop = new L.OverPassLayer({
        query: "node(BBOX)['shop'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#F33',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var cafe = new L.OverPassLayer({
        query: "node(BBOX)['amenity'='cafe'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#3F3',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var bins = new L.OverPassLayer({
        query: "node(BBOX)['amenity'='waste_basket'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#555',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var defib = new L.OverPassLayer({
        query: "node(BBOX)['emergency'='defibrillator'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var historic = new L.OverPassLayer({
        query: "node(BBOX)['historic'~'.*'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var tourism = new L.OverPassLayer({
        query: "node(BBOX)['tourism'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = this.instance._poiInfo(e.tags, e.id);
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#000',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    var photos = new L.OverPassLayer({
        query: "node(BBOX)['tourism'='photo'];out;",
        callback: function(data) {
            for (var i = 0; i < data.elements.length; i++) {
                var e = data.elements[i];
                if (e.id in this.instance._ids) return;
                this.instance._ids[e.id] = true;
                var pos = new L.LatLng(e.lat, e.lon);
                var popup = `<img src="images/${e.id}.jpg" alt="Photo" style="width: 100%; height: auto;">`;
                var color = e.tags.collection_times ? 'green' : 'red';
                var circle = L.circle(pos, 10, {
                    color: color,
                    fillColor: '#000',
                    fillOpacity: 0.5
                }).bindPopup(popup);
                this.instance.addLayer(circle);
            }
        }
    });

    // And here we list of the aforementioned POI
    var additionalOverlayLayers = {
        "Plaques": plaques,
        "Shops": shop,
        "Cafes": cafe,
        "Bins": bins,
        "Defibrillator": defib,
        "Historic": historic,
        "Tourism": tourism
        //"Photos": photoLayer
    };

    // The scrollbar for our POIs
    var horizontalLayerControl2 = L.Control.extend({
        options: {
            position: 'topright'
        },
        onAdd: function (map) {
            var container = L.DomUtil.create('div', 'leaflet-control-layers-horizontal');

            for (var overlayName in additionalOverlayLayers) {
                var label = L.DomUtil.create('label', '', container);
                var input = L.DomUtil.create('input', '', label);
                input.type = 'checkbox';
                input.name = 'overlaylayer';
                input.value = overlayName;
                input.checked = map.hasLayer(additionalOverlayLayers[overlayName]);
                input.layer = additionalOverlayLayers[overlayName];
                input.onclick = function () {
                    if (map.hasLayer(this.layer)) {
                        map.removeLayer(this.layer);
                    } else {
                        map.addLayer(this.layer);
                    }
                };
                label.appendChild(document.createTextNode(overlayName));
            }

            return container;
        }
    });

    //map.addControl(new horizontalLayerControl2());