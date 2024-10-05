import { places } from './locations.js'; 

// Initialize the map and set its view to Philadelphia
var map = L.map('map').setView([39.9526, -75.1652], 13);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 12,
    attribution: 'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Lock the map bounds to keep the view within Philadelphia
var southWest = L.latLng(39.85, -75.2803),
    northEast = L.latLng(40.0389, -75.0134),
    bounds = L.latLngBounds(southWest, northEast);

map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// Disable zooming with mouse scroll by default
map.scrollWheelZoom.disable();

// Loop through the places array to create markers
places.forEach(function(place) {
    var marker = L.marker(place.coordinates).addTo(map);
    marker.bindPopup("<b>" + place.name + "</b><br>" + place.description);
});

// Toggle Scroll Zoom functionality
const toggleZoomBtn = document.getElementById('toggleZoomBtn');
let scrollZoomEnabled = false; // Track the current state

toggleZoomBtn.addEventListener('click', function() {
    if (scrollZoomEnabled) {
        // If zoom is enabled, disable it
        map.scrollWheelZoom.disable();
        toggleZoomBtn.textContent = 'Enable Scroll Zoom'; // Update button text
        scrollZoomEnabled = false; // Update state
    } else {
        // If zoom is disabled, enable it
        map.scrollWheelZoom.enable();
        toggleZoomBtn.textContent = 'Disable Scroll Zoom'; // Update button text
        scrollZoomEnabled = true; // Update state
    }
});
