# Regional Historical Timeline
## Introduction 
This webpage is a Leaflet application that is designed to show historical maps for a region as well as OpenHistoricalMaps (OHM) for the region.

Simply, it allows for the user to scroll through a timeline of the region, as the years change the historical map changes as well as the OHM. 
Pins are shown on the map for any points of interest, clicking a pin wil show a popup with a abridged description of the point as well as a relevant photo.
Clicking the photo enlarges the image, shows a full description, and also shows a QR code that - once scanned - will open the mobile photo map app and direct the user there.

## Using the webpage
Open index.html
The webpage will load the required files automatically 
Drag the scrollbar at the bottom of the screen, the numbers above represent the current year
Clicking the button below the scrollbar changes the map view
Dragging your finger on the map pans the map
Pinching two fingers zooms the map
Clicking a pin on the map will show an information popup
To close a popup click anywhere on the map
Clicking a popup image will show and enlarge image, a decsriptipn, and a location QR code
Clicking anywhere will close this information window
Not interacting with the display will cause the timeline to move automatically

## Editing the map appearance and content
Any useful variables are stored in an external JS file. This is to allow the editing of the application without needing to jump into changing any of the code directly. 

By default, what is the center of the map view
`var mapCenter = [56.563729541410666, -3.584791427303605];`

// What is the earliest date in the timeline
`var timelineStartDate = '1200';`

When the page opens, what year does it start on
`var timelineInitDate = '1860';`

The year that the timeline ends on
`var timelineEndYear = '2024';`

The maximum boundaries for the map
`var southWestBounds = L.latLng(56.550324, -3.6201320);
var northEastBounds = L.latLng(56.580230488, -3.571052);`

After how many seconds does the timeline move automatically
`var autoPlayTimer = 120;`

The text that appears on the toggle map view button
`var switchMessage01 = "Switch to Redrawn Map";
var switchMessage02 = "Switch to Original Map";`

The text that appears next to the QR code
`var qrCodeMessage = "Scan me with your phone to visit this location!";`

How many seconds does the timeline automove feature take per year
`var timelineInterval = 0.8;`

Historical maps are added by adding an entry to the Maps object 'mainOverlayMaps'
`"1500": L.tileLayer('data/redrawn_maps/beginning/{z}/{x}/{y}.png', {
        attribution: "In the beginning, there was nought but rivers and forests",
        maxZoom: 18,
        maxNativeZoom: 18
    }),`

A point of interest can be added in the .csv file either in Excel or directly to the text file by adding a new row and populating the fields.
`name,description,latitude,longitude,startYear,endYear,type,photo,qr`

The 'photo' and 'qr' fields are links to the respective photo and QR code files. 

A QR code is generated by creating a new QR code with the following data inside it:
`http://maps.apple.com/?saddr=56.56566242729967+-3.58727060799942&daddr=locationLatitude+locationLongitude&dirflg=w`
and substituting the locationLatitude and locagionLongitude for the latitude and longitude of the point of interest.

Each of the these files is stored in Dropbox for the time being. 