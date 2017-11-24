                    google.maps.event.addDomListener(window, 'load', init);

                    function init() {
                        var myLatlng = new google.maps.LatLng(24.6778, 84.9986);

                        var mapOptions = {
                            // How zoomed in you want the map to start at (always required)
                            zoom: 15,
                            disableDefaultUI: true,
							scrollwheel: false, 


                            center: myLatlng,

                            styles: [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
                        };

                        var mapElement = document.getElementById('map');

                        var map = new google.maps.Map(mapElement, mapOptions);
						
                        var marker = new google.maps.Marker({
                            position: myLatlng,
                            map: map,
							icon: 'images/map-marker.png',
                            title: 'CSIS18'
                        });
						
						

                    }
