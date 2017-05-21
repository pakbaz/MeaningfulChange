import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { DonateConfirmation } from '../donate-confirmation/donate-confirmation';

@Component({
  selector: 'page-donate',
  templateUrl: 'donate.html'
})

export class Donate {
  //private res : Observable<Response>;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  donate(amount: number)
  {
    var url = "https://hessersapi.azurewebsites.net/api/Donate";
    var date = new Date();

    var donateJson = 
    {
      "userName" : "bowatkins",
      "latitude" : 123.456,
      "longitude" : 123.456,
      "geoSRID" : "1433",
      "amount" : amount,
      "cause" : 1,  // TODO: Get this data from the form
      "paymentCode" : "ABCD",
      "donationDateTime" : date.toString()
    }

    this.http.post(url, donateJson)
    .map(res => res.json())
    .subscribe(data => { this.navCtrl.push(DonateConfirmation, { destination: "(temp destination)" }); });

  }
}
