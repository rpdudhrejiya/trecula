<template>
  <div id="main">
    <div id="mapid" ref="mapElement">
      <router-view/>
    </div>
  </div>
</template>
<script>
import L from 'leaflet';
import data from './user.dummy.data';
export default {
  name: 'App',
  async mounted() {
    var mymap = L.map(this.$refs['mapElement']).setView([51.505, -0.09], 13);
    await L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoicnBkdWRoYXJlaml5YSIsImEiOiJja3NsZnRsMzQwMmoxMm9sZWM0NmZmdHlpIn0.zoafh4hNuBnERCr5Y_S66Q'
    }).addTo(mymap);
    var latlngs = [
      [45.51, -122.68],
      [37.77, -122.43],
      [34.04, -118.2]
    ];
    L.polyline(latlngs, {color: 'red'}).addTo(mymap);
    var myIcon = L.divIcon({className: 'my-div-icon'});
    const layerGroup = L.featureGroup().addTo(mymap);
    data.forEach(({ lat, lon, name, address }) => {
      layerGroup.addLayer(
        L.marker([lat, lon], {icon: myIcon}).bindPopup(
          `Name: ${name}, Address: ${address}`
        )
      );
    });
    mymap.fitBounds(layerGroup.getBounds());
  },
}
</script>
<style lang='scss'>
@import '@/assets/css/app';
@import "@/assets/scss/colors","@/assets/scss/typography","@/assets/scss/mixin";
</style>
