import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { CensusServiceProvider } from "../../providers/census-service/census-service";

declare var google;

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})

export class Report {
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  private clientCount: number = 0;
  constructor(public navCtrl: NavController,private geolocation:Geolocation, private googleMaps: GoogleMaps, private censusService: CensusServiceProvider) {

  }

  ionViewDidLoad(){
    this.loadMap();
    
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      
      this.addMarker();

    }, (err) => {
      console.log(err);
    });
  }

  addMarker(){
 
  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });
 

  let content = "You are Here";          
 
  this.addInfoWindow(marker, content);
 
}

addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}

}

