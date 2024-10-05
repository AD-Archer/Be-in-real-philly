// GeoJSON data for notable locations in Philadelphia
export const geojsonData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Fairmount Park",
                "color": "#FF5733",
                "description": "A large urban park offering trails, gardens, and recreational activities.",
                "googleMapsLink": "https://www.google.com/maps/place/Fairmount+Park",
                "website": "https://www.fairmountpark.org/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-75.215, 39.980],
                        [-75.198, 39.980],
                        [-75.198, 39.965],
                        [-75.215, 39.965],
                        [-75.215, 39.980]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Fishtown",
                "color": "#33FF57",
                "description": "A trendy neighborhood known for its art scene and restaurants.",
                "googleMapsLink": "https://www.google.com/maps/place/Fishtown",
                "website": null,
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [-75.130, 39.975],
                        [-75.110, 39.975],
                        [-75.110, 39.960],
                        [-75.130, 39.960],
                        [-75.130, 39.975]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Liberty Bell",
                "color": "#FFCC00",
                "description": "An iconic symbol of American independence.",
                "googleMapsLink": "https://www.google.com/maps/place/Liberty+Bell",
                "website": "https://www.nps.gov/inde/liberty-bell.htm",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1503, 39.9496]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Independence Hall",
                "color": "#FFCC00",
                "description": "The birthplace of the United States, where the Declaration of Independence was adopted.",
                "googleMapsLink": "https://www.google.com/maps/place/Independence+Hall",
                "website": "https://www.nps.gov/inde/planyourvisit/independence-hall.htm",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1503, 39.9489]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Philadelphia Museum of Art",
                "color": "#FFCC00",
                "description": "A renowned art museum known for its impressive collection and iconic steps.",
                "googleMapsLink": "https://www.google.com/maps/place/Philadelphia+Museum+of+Art",
                "website": "https://www.philamuseum.org/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1803, 39.9656]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Eastern State Penitentiary",
                "color": "#FFCC00",
                "description": "A historic prison known for its grand architecture and ghost tours.",
                "googleMapsLink": "https://www.google.com/maps/place/Eastern+State+Penitentiary",
                "website": "https://www.easternstate.org/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1720, 39.9682]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Betsy Ross House",
                "color": "#FFCC00",
                "description": "The former home of Betsy Ross, who is credited with sewing the first American flag.",
                "googleMapsLink": "https://www.google.com/maps/place/Betsy+Ross+House/@39.9522308,-75.147227,16z/data=!3m1!4b1!4m6!3m5!1s0x89c6c886723e880f:0xd62f93bae96423b7!8m2!3d39.9522267!4d-75.1446521!16zL20vMGRqaG5z?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D",
                "website": "https://www.historicphiladelphia.org/betsy-ross-house/",
                "image": "../images/Betsy Ross House Front Exterior.webp" 
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1440, 39.9522]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Reading Terminal Market",
                "color": "#FFCC00",
                "description": "A vibrant market featuring local produce, shops, and eateries.",
                "googleMapsLink": "https://www.google.com/maps/place/Reading+Terminal+Market",
                "website": "https://readingterminalmarket.org/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1652, 39.9523]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Schuylkill River Trail",
                "color": "#FFCC00",
                "description": "A scenic trail along the Schuylkill River, perfect for walking and biking.",
                "googleMapsLink": "https://www.google.com/maps/place/Schuylkill+River+Trail",
                "website": "https://www.schuylkillriver.org/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1881, 39.9523]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Franklin Institute",
                "color": "#FFCC00",
                "description": "A science museum with hands-on exhibits and an IMAX theater.",
                "googleMapsLink": "https://www.google.com/maps/place/Franklin+Institute",
                "website": "https://www.fi.edu/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1745, 39.9561]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "City Hall",
                "color": "#FFCC00",
                "description": "The seat of government for the city, featuring a stunning clock tower.",
                "googleMapsLink": "https://www.google.com/maps/place/City+Hall",
                "website": "https://www.phila.gov/cityhall/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1652, 39.9526]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "One Liberty Observation Deck",
                "color": "#FFCC00",
                "description": "An observation deck offering stunning views of the Philadelphia skyline.",
                "googleMapsLink": "https://www.google.com/maps/place/One+Liberty+Observation+Deck",
                "website": "https://www.onelibertyobservationdeck.com/",
                "image": ""  // Image URL will go here
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-75.1645, 39.9525]
            }
        }
    ]
};
