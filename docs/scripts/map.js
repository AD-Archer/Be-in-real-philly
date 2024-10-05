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

// Function to create a default sharp point marker
function createSharpPointMarker(color) {
    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="background-color: ${color}; border: 2px solid white; width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 15px solid ${color};"></div>`,
        iconSize: [20, 20], // Adjust size as needed
        iconAnchor: [10, 20] // Adjust anchor point
    });
}

// Function to add markers and polygons based on GeoJSON data
function addFeatures() {
    geojsonData.features.forEach(feature => {
        const coordinates = feature.geometry.coordinates;

        // Create a marker for points
        if (feature.geometry.type === 'Point') {
            // Get color from properties (ensure it's a valid Leaflet color string)
            const markerColor = feature.properties.color || 'blue'; // Default to blue if no color specified

            // Create a sharp point marker
            const markerIcon = createSharpPointMarker(markerColor);
            const marker = L.marker([coordinates[1], coordinates[0]], { icon: markerIcon });

            // Create a popup with name, description, website link, and image
            const { name, description, googleMapsLink, website, image } = feature.properties;

            let popupContent = `
                <h3>${name}</h3>
                <p>${description}</p>
                <a href="${googleMapsLink}" target="_blank">View on Google Maps</a><br>
                ${website ? `<a href="${website}" target="_blank">Visit Website</a><br>` : ''}
                ${image ? `<img src="${image}" alt="${name}" style="max-width:100px;"/>` : ''}
            `;

            marker.bindPopup(popupContent); // Bind the popup to the marker
            marker.addTo(map); // Add the marker to the map

        // Create a polygon for other geometry types
        } else if (feature.geometry.type === 'Polygon') {
            const polygon = L.polygon(coordinates[0].map(coord => [coord[1], coord[0]]), {
                color: feature.properties.color || 'blue', // Use the color from properties or default to blue
                fillOpacity: 0.5 // Adjust fill opacity as needed
            });

            polygon.bindPopup(`
                <strong>${feature.properties.name}</strong><br>
                ${feature.properties.description}<br>
                <a href="${feature.properties.googleMapsLink}" target="_blank">View on Google Maps</a><br>
                ${feature.properties.website ? `<a href="${feature.properties.website}" target="_blank">Visit Website</a><br>` : ''}
                ${feature.properties.image ? `<img src="${feature.properties.image}" alt="${feature.properties.name}" style="max-width:100px;"/>` : ''}
            `); // Bind the popup to the polygon
            polygon.addTo(map); // Add the polygon to the map
        }
    });
}

// Initialize markers and polygons
addFeatures(); // Call the function to add features

// Check local storage to see if scroll zoom should be enabled
let scrollZoomEnabled = localStorage.getItem('scrollZoomEnabled') === 'true';

// Set the scroll zoom state based on local storage
function updateScrollZoom() {
    if (scrollZoomEnabled) {
        map.scrollWheelZoom.enable();
        document.getElementById('toggleZoomBtn').textContent = 'Disable Scroll Zoom';
    } else {
        map.scrollWheelZoom.disable();
        document.getElementById('toggleZoomBtn').textContent = 'Enable Scroll Zoom';
    }
}

// Call the update function to set the initial state
updateScrollZoom();

// Toggle Scroll Zoom functionality
const toggleZoomBtn = document.getElementById('toggleZoomBtn');
toggleZoomBtn.addEventListener('click', function () {
    scrollZoomEnabled = !scrollZoomEnabled; // Toggle the state
    updateScrollZoom(); // Update the map based on the new state
    localStorage.setItem('scrollZoomEnabled', scrollZoomEnabled); // Save state in local storage
});
