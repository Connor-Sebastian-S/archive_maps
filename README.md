# Map Timeline and Point of Interest Viewer

* Long story short, this webpage has a series of maps that, when the slider at the bottom is moved it will move through those maps. 
* There's a label above the slider handle that shows the current year.
* The POI checkboxes at the top will toggle various POI on and off on the map.
* A button on the top left will switch between original map and redrawn maps, maintaining the current year position.
* There are POI that can be set to appear on specific dates or ranges of dates. These POIs can have photos, descriptions, or whatever in them. 

## Adding new maps
* Add an entry to mainOverlayLayers
```
"1747": L.tileLayer('data/1747/{z}/{x}/{y}.png', {
    minZoom: 9, maxZoom: 16, tms: false,
    attribution: "Produced by x in 1747, as part of x"
}),
```
* Add an entry to alternativeOverlayLayers
```
"1747": L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 9, maxZoom: 16, tms: false,
    attribution: "Alternative 1747 Map"
}),
```
* Ensure that the names of each new entry ("1747") are the start date of the new map and that they are in chronological order.

## Adding new information point
* Add an entry to pointsData
```
        {
            "name": "Wow look at this photo",
            "description": "This photo show a thing happening at that place",
            "latitude": 56.56561477,
            "longitude": -3.58550088,
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Scanian_War_Collage.jpg/1280px-Scanian_War_Collage.jpg",
            "startYear": 1820,
            "endYear": 1830
        },
```
* Ensure that the startYear is LESS than the endYear

## Adjust Start Year
* If earlier maps are added then you'll need to change the start date. Adjust that as follows.
```
var startDate = 1740;
var endDate = 2024;
var diff = endDate - startDate;
```
