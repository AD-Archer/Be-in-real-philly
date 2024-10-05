// colors 
const red = "#fe0000"
const blue = "#FF5733"
const green = "#18fe00"
const yellow = "#fef600"
const purple = "#f000fe"





// GeoJSON data for notable locations in Philadelphia

export const geojsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "Old City",
          "color": purple,
          "description": "Old City is where Philadelphia began, serving as the heart of the city during its colonial period. It’s home to landmarks like Independence Hall and the Liberty Bell.",
          "googleMapsLink": "https://www.google.com/maps/place/Old+City",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1405, 39.9496]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Fairmount",
          "color": "#FF5733",
          "description": "Fairmount has a rich history connected to the Fairmount Water Works and the city’s expansion westward.",
          "googleMapsLink": "https://www.google.com/maps/place/Fairmount",
          "website": "https://www.fairmountpark.org/",
          "image": ""
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-75.209, 39.966],
              [-75.202, 39.966],
              [-75.202, 39.951],
              [-75.209, 39.951],
              [-75.209, 39.966]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Fishtown",
          "color": "#FF5733",
          "description": "Fishtown, once a working-class neighborhood for Irish fishermen, has evolved into one of Philadelphia’s most trendy areas.",
          "googleMapsLink": "https://www.google.com/maps/place/Fishtown",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-75.135, 39.961],
              [-75.126, 39.961],
              [-75.126, 39.951],
              [-75.135, 39.951],
              [-75.135, 39.961]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "West Philadelphia",
          "color": "#FF5733",
          "description": "West Philadelphia is best known for its role in education and innovation, with institutions like the University of Pennsylvania.",
          "googleMapsLink": "https://www.google.com/maps/place/West+Philadelphia",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-75.227, 39.959],
              [-75.210, 39.959],
              [-75.210, 39.947],
              [-75.227, 39.947],
              [-75.227, 39.959]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "South Philadelphia",
          "color": "#FF5733",
          "description": "South Philadelphia is known for its strong Italian-American community and was historically an industrial area.",
          "googleMapsLink": "https://www.google.com/maps/place/South+Philadelphia",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-75.183, 39.917],
              [-75.175, 39.917],
              [-75.175, 39.902],
              [-75.183, 39.902],
              [-75.183, 39.917]
            ]
          ]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Elfreth's Alley",
          "color": "#FFCC00",
          "description": "Oldest residential street in the U.S., with homes dating back to the early 18th century.",
          "googleMapsLink": "https://www.google.com/maps/place/Elfreth's+Alley",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1423, 39.9552]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Christ Church",
          "color": "#FFCC00",
          "description": "Colonial-era church attended by George Washington and Benjamin Franklin.",
          "googleMapsLink": "https://www.google.com/maps/place/Christ+Church",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1442, 39.9537]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Betsy Ross House",
          "color": "#FFCC00",
          "description": "Traditional home of Betsy Ross, believed to have sewn the first American flag.",
          "googleMapsLink": "https://www.google.com/maps/place/Betsy+Ross+House",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1442, 39.9518]
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
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1503, 39.9489]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "The Franklin Institute",
          "color": "#FFCC00",
          "description": "A science museum named after Benjamin Franklin, it has been a leading center for science education since its opening in 1934.",
          "googleMapsLink": "https://www.google.com/maps/place/The+Franklin+Institute",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1793, 39.9561]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Valley Forge National Historical Park",
          "color": "#FFCC00",
          "description": "The site of the Continental Army’s winter encampment during 1777-1778.",
          "googleMapsLink": "https://www.google.com/maps/place/Valley+Forge+National+Historical+Park",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.4493, 40.1047]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Eastern State Penitentiary",
          "color": "#FFCC00",
          "description": "Opened in 1829, Eastern State Penitentiary was designed to reform rather than punish, pioneering the concept of solitary confinement.",
          "googleMapsLink": "https://www.google.com/maps/place/Eastern+State+Penitentiary",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1806, 39.9643]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Temple University",
          "color": "#FFCC00",
          "description": "Founded in 1884, Temple University started as a night school for adults and has grown into a major public research university.",
          "googleMapsLink": "https://www.google.com/maps/place/Temple+University",
          "website": "",
          "image": ""
        },
       "geometry": {
    "type": "Polygon",
    "coordinates": [[
        [-75.1650, 39.9865],  // North-East
        [-75.1550, 39.9865],  // North-West
        [-75.1550, 39.9795],  // South-West
        [-75.1650, 39.9795],  // South-East
        [-75.1650, 39.9865]   // Closing the polygon    ]]
    ]]
  }

      },
      {
        "type": "Feature",
        "properties": {
          "name": "Community College of Philadelphia (CCP)",
          "color": red,
          "description": "Established in 1965 to provide affordable higher education to the residents of Philadelphia.",
          "googleMapsLink": "https://www.google.com/maps/place/Community+College+of+Philadelphia+-+Main+Campus/data=!4m7!3m6!1s0x89c6c6e5bce23957:0xd77e3792da2d45b6!8m2!3d39.9617223!4d-75.1663954!16s%2Fg%2F1vxdz6pt!19sChIJVznivOXGxokRtkUt2pI3ftc?authuser=0&hl=en&rclk=1",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1652, 39.9643]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Cobbs Creek",
          "color": "#FFCC00",
          "description": "Cobbs Creek is significant for its natural beauty and historical role in the city's water management system.",
          "googleMapsLink": "https://www.google.com/maps/place/Cobbs+Creek",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.2270, 39.9643]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Geno's Steaks",
          "color": "#FF5733",
          "description": "Geno's Steaks is a legendary Philadelphia cheesesteak restaurant, established in 1966. It is known for its bright neon signs and distinctive ordering style. The restaurant offers high-quality cheesesteaks made from thinly sliced ribeye steak.",
          "googleMapsLink": "https://www.google.com/maps/place/Geno's+Steaks/@39.9374,-75.1644,15z/data=!4m6!3m5!1s0x89c6c6f5c0ed66b1:0xaefb8e21728dfb67!8m2!3d39.9374!4d-75.1621",
          "website": "https://www.genosteaks.com",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1621, 39.9374]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Pat's King of Steaks",
          "color": "#FF5733",
          "description": "Pat's King of Steaks, founded in 1930, is one of the most famous cheesesteak establishments in Philadelphia. It is known for its classic cheesesteak made from thinly sliced ribeye steak, served on freshly baked Italian rolls.",
          "googleMapsLink": "https://www.google.com/maps/place/Pat's+King+of+Steaks/@39.9374,-75.1644,15z/data=!4m6!3m5!1s0x89c6c6f7e30d3b5:0x1b9ae5e08440d992!8m2!3d39.9374!4d-75.1620",
          "website": "https://www.patskingofsteaks.com",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1620, 39.9374]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Reading Terminal Market",
          "color": "#FF5733",
          "description": "Opened in 1893, Reading Terminal Market is one of America’s oldest and largest public markets. It showcases Philadelphia's diverse culinary landscape, with vendors selling fresh produce and iconic foods like cheesesteaks.",
          "googleMapsLink": "https://www.google.com/maps/place/Reading+Terminal+Market/@39.9530,-75.1570,15z/data=!4m6!3m5!1s0x89c6c6f658b2f45:0xd587c1b140af036d!8m2!3d39.9530!4d-75.1556",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1556, 39.9530]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Jim's Steaks",
          "color": "#FF5733",
          "description": "Established in 1939, Jim's Steaks is renowned for its cheesesteaks and has become a top spot for this iconic dish. The original location has a rich history and a commitment to quality ingredients.",
          "googleMapsLink": "https://www.google.com/maps/place/Jim's+Steaks/@39.9432,-75.1496,15z/data=!4m6!3m5!1s0x89c6c6f3f4e68eb:0x352ba6935a431d2f!8m2!3d39.9432!4d-75.1482",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1482, 39.9432]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Dalessandro’s Steaks",
          "color": "#FF5733",
          "description": "Founded in 1960, Dalessandro’s is a family-owned establishment known for high-quality cheesesteaks. It has gained a loyal following and has been featured in various food publications.",
          "googleMapsLink": "https://www.google.com/maps/place/Dalessandro's+Steaks/@40.0215,-75.2174,15z/data=!4m6!3m5!1s0x89c6c6e1e434bb17:0x5ae15b03f1c8d0a1!8m2!3d40.0215!4d-75.2160",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.2160, 40.0215]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Frankford Hall",
          "color": "#FF5733",
          "description": "Opened in 2010, Frankford Hall is a German beer garden offering traditional German fare and modern cuisine. It reflects Philadelphia’s evolving food culture while honoring its historical roots.",
          "googleMapsLink": "https://www.google.com/maps/place/Frankford+Hall/@39.9791,-75.1192,15z/data=!4m6!3m5!1s0x89c6c703e1b4d33:0x83f1e5b7de45cc2d!8m2!3d39.9791!4d-75.1178",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1178, 39.9791]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Beck’s Cajun Cafe",
          "color": "#FF5733",
          "description": "Established in 1991, Beck’s Cajun Cafe brings authentic Cajun cuisine to Philadelphia, with dishes like gumbo and jambalaya. It has become a go-to spot for southern comfort food.",
          "googleMapsLink": "https://www.google.com/maps/place/Beck's+Cajun+Cafe/@39.9657,-75.1347,15z/data=!4m6!3m5!1s0x89c6c6f611e27cb:0x7fd3d11da035e23e!8m2!3d39.9657!4d-75.1333",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1333, 39.9657]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Old City Pizza",
          "color": "#FF5733",
          "description": "Operating since 1986, Old City Pizza is known for its classic Italian-style pizzas, embodying the city’s Italian-American heritage.",
          "googleMapsLink": "https://www.google.com/maps/place/Old+City+Pizza/@39.9203,-75.1698,15z/data=!4m6!3m5!1s0x89c6c6f4b882a98d:0x16efb2f1398ab1cc!8m2!3d39.9203!4d-75.1684",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1684, 39.9203]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "Termini Bros Bakery",
          "color": "#FF5733",
          "description": "Founded in 1921, Termini Bros is renowned for its cannoli, pastries, and traditional Italian desserts, reflecting Philadelphia's rich Italian heritage.",
          "googleMapsLink": "https://www.google.com/maps/place/Termini+Bros+Bakery/@39.9363,-75.1632,15z/data=!4m6!3m5!1s0x89c6c6f4b88db07:0xd68aa43280e99db5!8m2!3d39.9363!4d-75.1618",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1618, 39.9363]
        }
      },
      {
        "type": "Feature",
        "properties": {
          "name": "The Dining Car",
          "color": "#FF5733",
          "description": "Established in 1947, The Dining Car is a classic American diner known for its hearty breakfast and comfort food, attracting regulars and visitors alike.",
          "googleMapsLink": "https://www.google.com/maps/place/The+Dining+Car/@39.9534,-75.1530,15z/data=!4m6!3m5!1s0x89c6c6f55b6be37:0x78f90523f7b155f9!8m2!3d39.9534!4d-75.1516",
          "website": "",
          "image": ""
        },
        "geometry": {
          "type": "Point",
          "coordinates": [-75.1516, 39.9534]
        }
      },
      {
            "type": "Feature",
            "properties": {
              "name": "Cobbs Creek",
              "description": "Cobbs Creek has historical roots dating back to the early 19th century when it was primarily rural and agricultural. Over time, it developed into a residential area with a diverse population, reflecting Philadelphia's broader patterns of urban development and demographic change.",
              "googleMapsLink": "https://www.google.com/maps/place/Cobbs+Creek,+Philadelphia,+PA",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-75.229, 39.951], 
                [-75.221, 39.951], 
                [-75.221, 39.946], 
                [-75.229, 39.946], 
                [-75.229, 39.951]
              ]]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Upper Darby",
              "description": "Upper Darby began to develop rapidly in the late 19th century with the expansion of the Pennsylvania Railroad, facilitating better access to Philadelphia. It is known for its residential neighborhoods and growing commercial district, along with the establishment of the Upper Darby School District, supporting its population growth.",
              "googleMapsLink": "https://www.google.com/maps/place/Upper+Darby,+PA",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-75.270, 39.970], 
                [-75.260, 39.970], 
                [-75.260, 39.960], 
                [-75.270, 39.960], 
                [-75.270, 39.970]
              ]]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "East Passyunk",
              "description": "East Passyunk has a rich history dating back to the 19th century, primarily inhabited by Irish and Italian immigrants. It developed as a center for local businesses and has recently undergone revitalization, emerging as a vibrant culinary and cultural hub.",
              "googleMapsLink": "https://www.google.com/maps/place/East+Passyunk,+Philadelphia,+PA",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-75.195, 39.930], 
                [-75.180, 39.930], 
                [-75.180, 39.920], 
                [-75.195, 39.920], 
                [-75.195, 39.930]
              ]]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Norristown",
              "description": "Norristown, established in the early 18th century, developed as a key transportation hub along the Schuylkill River. It grew rapidly as an industrial center in the 19th century, focusing on manufacturing textiles and machinery.",
              "googleMapsLink": "https://www.google.com/maps/place/Norristown,+PA",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Polygon",
              "coordinates": [[
                [-75.350, 40.110], 
                [-75.330, 40.110], 
                [-75.330, 40.095], 
                [-75.350, 40.095], 
                [-75.350, 40.110]
              ]]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Cecil B. Moore",
              "color": "#FF5733",
              "description": "Cecil B. Moore (1915-1993) was a prominent civil rights leader and attorney known for his advocacy for African American rights in Philadelphia. He played a crucial role during the Civil Rights Movement, focusing on issues like housing, education, and racial equality. His legacy is honored through Cecil B. Moore Avenue.",
              "googleMapsLink": "https://www.google.com/maps/place/Cecil+B.+Moore+Avenue",
              "website": "",
              "image": ""
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                  [-75.1580, 39.9810],  // North-East
                  [-75.1550, 39.9810],  // North-West
                  [-75.1550, 39.9790],  // South-West
                  [-75.1580, 39.9790],  // South-East
                  [-75.1580, 39.9810]   // Closing the polygon
                ]]
              }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Fashion District",
              "description": "The Fashion District in Philadelphia was established as part of a major redevelopment project aimed at revitalizing the area formerly known as the Gallery at Market East. Opened in 2019 after extensive renovations, it focuses on supporting minority-owned businesses and promoting diverse fashion retailers.",
              "googleMapsLink": "https://www.google.com/maps/place/Fashion+District+Philadelphia",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.1504, 39.9531]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Philadelphia School District",
              "description": "The Philadelphia School District (PSD) is the largest school district in Pennsylvania, established in 1818. It serves over 200,000 students across approximately 220 schools and has faced various challenges while making strides in funding and educational equity.",
              "googleMapsLink": "https://www.google.com/maps/place/Philadelphia+School+District",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.1649, 39.9584]
            }
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Suburban Station",
              "description": "Opened in 1930, Suburban Station is a major commuter railway station designed in Beaux-Arts style. It serves as a hub for regional transportation and offers access to SEPTA regional rail lines, Amtrak services, and the Philadelphia subway system.",
              "googleMapsLink": "https://www.google.com/maps/place/Suburban+Station",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.1644, 39.9522]
            }
          },
          {
            "type": "Feature",
            "properties": {
              color: red,
              "name": "Liberty Bell Center",
              "description": "The Liberty Bell was originally cast in 1752 for the Pennsylvania State House. It became historically significant during the American Revolution and later associated with the abolitionist movement. The inscription reflects its connection to American independence and human rights.",
              "googleMapsLink": "https://www.google.com/maps/place/Liberty+Bell+Center",
              "website": "",
              "image": ""
            },
            "geometry": {
              "type": "Point",
              "coordinates": [-75.1401, 39.9484]
            }
          }
        ]
    }
      

      