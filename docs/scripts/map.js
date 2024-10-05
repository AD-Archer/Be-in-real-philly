import { geojsonData } from './locations.js';  // Adjust the path as necessary

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

// Function to add markers and polygons based on GeoJSON data
function addMarkers() {
    geojsonData.features.forEach(feature => {
        const coordinates = feature.geometry.type === 'Point' 
            ? feature.geometry.coordinates 
            : feature.geometry.coordinates[0][0]; // Assuming polygons use the first coordinate set

        // Create a marker or polygon based on geometry type
        let layer;
        if (feature.geometry.type === 'Point') {
            layer = L.marker([coordinates[1], coordinates[0]]);
        } else {
            layer = L.polygon(coordinates.map(coord => [coord[1], coord[0]]));
        }

        // Create a popup with name, description, website link, and image
        const { name, description, googleMapsLink, website, image } = feature.properties;

        let popupContent = `
            <h3>${name}</h3>
            <p>${description}</p>
            <a href="${googleMapsLink}" target="_blank">View on Google Maps</a><br>
            ${website ? `<a href="${website}" target="_blank">Visit Website</a><br>` : ''}
            ${image ? `<img src="${image}" alt="${name}" style="max-width:100px;"/>` : ''}
        `;

        layer.bindPopup(popupContent);
        layer.addTo(map); // Add the layer to the map
    });
}

// Add GeoJSON layers with additional properties and styling
const geoJsonLayer = L.geoJSON(geojsonData, {
    style: function(feature) {
        return { color: feature.properties.color }; // Customize styling as needed
    },
    onEachFeature: function(feature, layer) {
        if (feature.properties) {
            // Use the same popup content creation here
            const popupContent = `
                <strong>${feature.properties.name}</strong><br>
                ${feature.properties.description}<br>
                <a href="${feature.properties.googleMapsLink}" target="_blank">View on Google Maps</a><br>
                ${feature.properties.website ? `<a href="${feature.properties.website}" target="_blank">Visit Website</a><br>` : ''}
                ${feature.properties.image ? `<img src="${feature.properties.image}" alt="${feature.properties.name}" style="max-width:100px;"/>` : ''}
            `;
            layer.bindPopup(popupContent); // Bind the popup to the layer
        }
    }
}).addTo(map);

// Initialize markers and polygons
addMarkers(); // Call the function to add markers

// Check local storage to see if scroll zoom should be enabled
let scrollZoomEnabled = localStorage.getItem('scrollZoomEnabled') === 'true';

// Set the scroll zoom state based on local storage
if (scrollZoomEnabled) {
    map.scrollWheelZoom.enable();
    document.getElementById('toggleZoomBtn').textContent = 'Disable Scroll Zoom';
} else {
    map.scrollWheelZoom.disable();
    document.getElementById('toggleZoomBtn').textContent = 'Enable Scroll Zoom';
}

// Toggle Scroll Zoom functionality
const toggleZoomBtn = document.getElementById('toggleZoomBtn');
toggleZoomBtn.addEventListener('click', function() {
    if (scrollZoomEnabled) {
        map.scrollWheelZoom.disable();
        toggleZoomBtn.textContent = 'Enable Scroll Zoom';
        scrollZoomEnabled = false;
    } else {
        map.scrollWheelZoom.enable();
        toggleZoomBtn.textContent = 'Disable Scroll Zoom';
        scrollZoomEnabled = true;
    }
    localStorage.setItem('scrollZoomEnabled', scrollZoomEnabled); // Save state in local storage
});
