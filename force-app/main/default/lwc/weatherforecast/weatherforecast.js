import { getLocationService } from 'lightning/mobileCapabilities';
import { LightningElement,api, track } from 'lwc';

export default class Weatherforecast extends LightningElement {
    @track Latitude;
    @track Longtitude;
    @track myLocation;

    /*connectedCallback(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const long = position.coords.longitude;
              console.log('Latitude: ', lat);
              console.log('Longitude: ', long);
            }, error => {
              console.log('Need access to get location.');
            });
          }

    }*/

    handleFindMeClick() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const long = position.coords.longitude;
              console.log('Latitude: ', lat);
              console.log('Longitude: ', long);
            }, error => {
              console.log('Need access to get location.');
            });
          }
    }

    findlocation(){
        console.log("Hello World");
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position);
          } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        this.Latitude = Position.coords.latitude;
        this.Longtitude = position.coords.longitude;
        console.log("The Co-ordinates are");
        console.log("Latitude is",this.Latitude);
        console.log("Longtitude is",this.Longitude);
    }


}