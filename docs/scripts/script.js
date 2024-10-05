var map = L.map('map').setView([39.9526, -75.1652], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); 

var marker = L.marker([39.9526, -75.1652]).addTo(map); //This adds markers to the map
