import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { DonateConfirmation } from '../donate-confirmation/donate-confirmation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})

export class Donate {
  //private res : Observable<Response>;
  currentPosition : Geoposition;
  constructor(public navCtrl: NavController, public http: Http, public geolocation: Geolocation) {
    this.geolocation.getCurrentPosition().then((position) => {
      this.currentPosition = position;
    });
  }

  donate(amount: number)
  {
    var url = "https://hessersapi.azurewebsites.net/api/Donate";

    var donateJson = 
    {
      "userName" : "bowatkins",
      "latitude" : this.currentPosition.coords.latitude,
      "longitude" : this.currentPosition.coords.latitude,
      "geoSRID" : "4326",
      "amount" : amount,
      "cause" : 1,  // TODO: Get this data from the form
      "paymentCode" : "ABCD",
      "donationDateTime" : new Date().toLocaleDateString()
    }

    this.http.post(url, donateJson)
    .map(res => res.json())
    .subscribe(data => { this.navCtrl.push(DonateConfirmation, { destination: "(temp destination)" }); });

  }
}
