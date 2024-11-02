// By default, what is the center of the map view
var mapCenter = [56.56508068059957, -3.590080480735924];

// What is the earliest date in the timeline
var timelineStartDate = '1640';

// When the page opens, what year does it start on
var timelineInitDate = '1680';

// The year that the timeline ends on
var timelineEndYear = '1900';

// The maximum boundaries for the map
var southWestBounds = L.latLng(56.550324, -3.6201320);
var northEastBounds = L.latLng(56.580230488, -3.571052);

// After how many seconds does the timeline move automatically
var autoPlayTimer = 10;

// The text that appears on the toggle map view button
var switchMessage01 = "Switch to Redrawn Map";
var switchMessage02 = "Switch to Original Map";

// The text that appears next to the QR code
var qrCodeMessage = "Scan me with your phone to visit this location!";

// How many seconds does the timeline automove feature take per year
var timelineInterval = 1;
