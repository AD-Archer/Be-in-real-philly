// Create the map and set view centered on West Philly
var map = L.map('map', {
    center: [39.9526, -75.1998], 
    zoom: 13,  // Initial zoom level
    minZoom: 12,  // Minimum zoom level to prevent zooming out too far
    maxZoom: 16  // Maximum zoom level
});

// Define the geographic bounds for West and Southwest Philly
var southWest = L.latLng(39.875, -75.270),
    northEast = L.latLng(39.980, -75.150),
    bounds = L.latLngBounds(southWest, northEast);

// Set the map to stay within the defined bounds
map.setMaxBounds(bounds);
map.on('drag', function() {
    map.panInsideBounds(bounds, { animate: false });
});

// Tile layer for the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Prevent users from zooming out too far beyond West and Southwest Philly
map.on('zoomend', function() {
    if (map.getZoom() < 12) {
        map.setZoom(12); // Lock zoom at level 12 if the user tries to zoom out too far
    }
});

// List of notable places with markers, descriptions, and links
var places = [
    {
        name: "Please Touch Museum",
        coords: [39.9833, -75.2087],
        description: "Philly’s favorite spot for kids to get hands-on! This place is packed with interactive exhibits where the little ones can touch, play, and learn. Perfect for a family day out in Fairmount Park.",
        website: "https://www.pleasetouchmuseum.org",
        directions: "39.9833,-75.2087"
    },
    {
        name: "Bartram's Garden",
        coords: [39.9302, -75.2159],
        description: "An oasis right in Southwest Philly. Bartram's Garden offers serene riverfront views, beautiful trails, and a slice of nature’s history—it’s the oldest surviving botanical garden in the country.",
        website: "https://bartramsgarden.org",
        directions: "39.9302,-75.2159"
    },
    {
        name: "John Heinz National Wildlife Refuge",
        coords: [39.8898, -75.2675],
        description: "Escape the city's hustle at John Heinz Wildlife Refuge! From birdwatching to peaceful hikes by the water, this spot is perfect for getting lost in nature without leaving Philly.",
        website: "https://www.fws.gov/refuge/john-heinz",
        directions: "39.8898,-75.2675"
    },
    {
        name: "Philadelphia Zoo",
        coords: [39.9741, -75.1952],
        description: "America’s first zoo, right here in Philly! Whether you're seeing the big cats, feeding giraffes, or just strolling through the lush grounds, the Philly Zoo is a classic for animal lovers of all ages.",
        website: "https://www.philadelphiazoo.org",
        directions: "39.9741,-75.1952"
    },
    {
        name: "University of Pennsylvania",
        coords: [39.9522, -75.1932],
        description: "More than just an Ivy League school, Penn’s campus is a cultural hub with art galleries, museums, and green spaces like Locust Walk, all nestled in the heart of West Philly.",
        website: "https://www.upenn.edu",
        directions: "39.9522,-75.1932"
    },
    {
        name: "Clark Park",
        coords: [39.9493, -75.2150],
        description: "Clark Park is where West Philly gathers! From weekend farmers markets to Shakespeare in the park, this community space is always buzzing with activity and has a laid-back neighborhood vibe.",
        website: "https://www.friendsofclarkpark.org",
        directions: "39.9493,-75.2150"
    },
    {
        name: "Woodlands Cemetery",
        coords: [39.9483, -75.2027],
        description: "More than just a cemetery, The Woodlands is a hidden gem with walking trails, historic architecture, and a peaceful place to enjoy nature right near the city.",
        website: "https://www.woodlandsphila.org",
        directions: "39.9483,-75.2027"
    },
    {
        name: "Cobbs Creek Park",
        coords: [39.9465, -75.2435],
        description: "West Philly’s own nature retreat, Cobbs Creek Park has something for everyone—hiking, biking, or just a calm walk by the creek. It’s the perfect spot to unwind and connect with the outdoors.",
        website: "https://www.cobbscreek.org",
        directions: "39.9465,-75.2435"
    },
    {
        name: "Schuylkill River Trail",
        coords: [39.9623, -75.1839],
        description: "Schuylkill Banks is your go-to for jogging, biking, or chilling by the river. Whether you're catching the skyline view or paddling on the water, this spot is a favorite among locals.",
        website: "https://www.schuylkillbanks.org",
        directions: "39.9623,-75.1839"
    },
    {
        name: "Schuylkill River Park",
        coords: [39.9462, -75.1803],
        description: "Located right on the riverfront, this park offers trails, sports facilities, and even a dog park—making it a must-visit for joggers, pet owners, and anyone looking for a riverside escape.",
        website: "https://www.schuylkillbanks.org/parks/schuylkill-river-park",
        directions: "39.9462,-75.1803"
    }
];


// Add markers for each place with descriptions
places.forEach(place => {
    var marker = L.marker(place.coords).addTo(map);
    marker.bindPopup(`
        <b>${place.name}</b><br>
        <i>${place.description}</i><br>
        <a href="${place.website}" target="_blank">Visit site</a><br>
        <a href="https://www.google.com/maps/dir/?api=1&destination=${place.directions}" target="_blank">Get Directions</a>
    `);
});

// Scroll Zoom Toggle Functionality
let scrollZoomEnabled = localStorage.getItem('scrollZoomEnabled') === 'true';

function updateScrollZoom() {
    if (scrollZoomEnabled) {
        map.scrollWheelZoom.enable();
        document.getElementById('toggleZoomBtn').textContent = 'Disable Scroll Zoom';
    } else {
        map.scrollWheelZoom.disable();
        document.getElementById('toggleZoomBtn').textContent = 'Enable Scroll Zoom';
    }
}

document.getElementById('toggleZoomBtn').addEventListener('click', function () {
    scrollZoomEnabled = !scrollZoomEnabled;
    updateScrollZoom();
    localStorage.setItem('scrollZoomEnabled', scrollZoomEnabled);
});

updateScrollZoom(); // Set initial zoom state
