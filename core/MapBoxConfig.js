

function initMap()
{
  mapboxgl.accessToken = 'pk.eyJ1Ijoia2lreCIsImEiOiJjbHl5OXZzczQxcjZxMmpxcmFsY29odGVyIn0.m66_Bekm7ZKpk2XVh3PeQw';
  const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  center: [2.3522, 48.8566], // starting position [lng, lat]
  zoom: 11, // starting zoom
  });

  const markers = [
    { lng: 2.3522, lat: 48.8566, description: 'Marker 1' },
    { lng: 2.3510, lat: 48.8546, description: 'Marker 2' },
  ];

  markers.forEach(marker => {
    // Créer un élément DOM pour le marqueur
    const el = document.createElement('div');
    console.log(el);
    el.className = 'marker';

    // Ajouter le marqueur à la carte
    new mapboxgl.Marker(el)
      .setLngLat([marker.lng, marker.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // Ajouter des popups
      .setText(marker.description))
      .addTo(map);
  
})

}



export {initMap};