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
@import "@/assets/scss/colors","@/assets/scss/typography","@/assets/scss/mixin";
#mapid { 
  height: 968px;
  z-index: 0;
}
.my-div-icon {
  background:blue;
  border:5px solid rgba(255,255,255,0.5);
  color:blue;
  font-weight:bold;
  text-align:center;
  border-radius:50%;
  line-height:30px;
  stroke-width:30px;
  height:30px;
  width:30px;
}
  .login{
    .title{
      color: $dark;
      font-family: $Font-Title;
      font-weight: $Weight;
      font-style: $Style;
      font-size: $Size;
      line-height: $Line-height;
      @include centering;
    }
    padding: 40px;
    position: relative;
    height: 100%;
    @include centering;
  }
  .action{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    a {
      color:#F01513;
    }
    button {
      color: #ffffff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      background-image: linear-gradient(95.78deg, #EE0912 -11.11%, #FC5916 88.69%);
    }
  }
  .form-group{
    a {
      color:#F01513;
    }
    padding: 10px;
  }
  .icon-title {
    margin-top: 9px;
  }
  .p-4 {
    font-size: 12px;
  }
  .layout-form .message {
    position: absolute;
  }
  .head-login {
    display: flex;
    flex-direction: row;
  }
  .label {
    color: #72777A
  }
  .message {
    color: #ff0000;
    font-size: 13px;
    opacity: .5;
  }
  #anchor-link {
    text-decoration: none;
  }
  .main-card {
    padding: 35px;
    margin-top: 30px;
    .card {
      position: relative;
      margin-top: 26px;
      background: #FFFFFF;
      box-shadow: 6px 6px 18px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
      font-family: Varela Round;
      font-style: normal;
      font-weight: normal;
      display: flex;
      flex-direction: row;
      padding: 15px;
      .icon {
        float: left;
        margin: 10px 10px 0px 20px;
        width: 29px;
        height: 24px;
      }
      .card-right {
        float: right;
        padding-left: 10px;
        .cardtitle {
          font-size: 18px;
          line-height: 32px;
          color: #141212;
        }
        .cardinfo {
          position: relative;
          margin-top: -15px;
          font-size: 12px;
          line-height: 32px;
          color: rgba(20, 18, 18, 0.5);
        }
      }
      .card-item {
        margin: auto;
        font-family: Varela Round;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 32px;
        color: #141212;         
      }
    }
  }
  .power {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 40px;
    .power-button {
      width: 45px;
      height: 45px;
      background: #F9462D;
      box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.06);
      border-radius: 8px;
    }
  }
  .number-input {
    padding: 100px 40px 0px 40px;
    top: 0;
    left: 0;
    right: 0;
  }
  .code {
    position: absolute;
    left: 0;
    right: 0;
    padding: 10px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #090A0A;
  }
  .code-info {
    position: absolute;
    left: 0;
    right: 0;
    padding: 40px;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #090A0A;
    .code-input {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 4%;
      padding: 20px;
      .c1 {
        background: #FFFFFF;
        border: 1px solid #E3E5E6;
        border-radius: 64px;
        padding: 20px; 
        width: 52px;
        height: 52px;
      }
    }
  }
  .forgot {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 40px;
    .verify-button {
      color: #ffffff;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      background-image: linear-gradient(95.78deg, #EE0912 -11.11%, #FC5916 88.69%);
    }
    @include centering;
  }
</style>
