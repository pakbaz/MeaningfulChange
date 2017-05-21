import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import { Http, Response } from '@angular/http';
import { Donate } from '../donate/donate';

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
  currentPosition: Geoposition;
  url : string = 'https://hessersapi.azurewebsites.net/api/InsertObservationCensusRecord';
  private clientCount: number = 1;
  constructor(public navCtrl: NavController, 
  private geolocation: Geolocation, 
  private googleMaps: GoogleMaps, 
  private censusService: CensusServiceProvider,
  private http: Http,
  public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    this.loadMap();

  }

  loadMap() {

    this.geolocation.getCurrentPosition().then((position) => {
      this.currentPosition = position;
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

  addMarker() {

    new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });

    this.censusService.load()
      .then(data => {
        for (var mark of data) {
          let marker = new google.maps.Marker({
            map: this.map,
            icon: {
              //path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
              path: google.maps.SymbolPath.CIRCLE,
              scale: 4,
              fillOpacity: 0.5,
              fillColor: 'lightblue',
              strokeWeight: 2,
              strokeOpacity: 0.8,
              strokeColor: 'darkblue'
            },
            animation: google.maps.Animation.DROP,
            position: { lat: mark.ObservationLatitude, lng: mark.ObservationLongitude }
          });
          let content = '<p>' + mark.ObservationGroup + ' persons has been reported here</p>';
          this.addInfoWindow(marker, content);
        }
      });

  }

  addInfoWindow(marker, content) {

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }


  ReportnDonate(){
    this.Report();
    this.navCtrl.push(Donate); 
  }

  Report(){
   
 var reportJson = 
    {
      "userName" : "spakbaz",
      "observationLatitude" : this.currentPosition.coords.latitude,
      "observationLongitude" : this.currentPosition.coords.longitude,
      "observationGroup" : this.clientCount,
      "geoSRID": "4326",
      "observationDateTime" : new Date().toLocaleDateString()
    }
    this.http.post(this.url, reportJson)
    .map(res => res.json())
    .subscribe(data => {console.info('reported'); this.showAlert()});

  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Reported!',
      subTitle: 'You have reported ' + this.clientCount + ' potential clients at your location!',
      buttons: ['OK']
    });
    alert.present();
  }

}


