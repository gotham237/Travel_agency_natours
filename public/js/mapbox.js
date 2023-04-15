/* eslint-disable */

export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZ290aGFtMjM3IiwiYSI6ImNsZ2RkdzF3ZDBtcHIzZW8wNmZ6dDJ1MHAifQ.g9wHtBaXW5DicCGSTQLweQ';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/gotham237/clgddz4pj003501o7l9k8efll',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 4
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';
    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);
    // Extends map bound to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
