console.log("basicMap.js loaded.");

// CPCC Coordinates: 35.2176665 N, 80.831473 W -> 35.2176665, -80.831473

let map = L.map("map", {
  center: [35.2176665, -80.831473],
  zoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([35.2176665, -80.831473], {
  title: "Hello from CPCC!"
}).bindPopup("Hello from CPCC!")
  .addTo(map);
