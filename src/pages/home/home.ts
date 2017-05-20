import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { Donate } from '../donate/donate';
import { Report } from '../report/report';
import { Advocate } from '../advocate/advocate';
import { Volunteer } from '../volunteer/volunteer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openReport(page) { this.navCtrl.push(Report); }
  openDonate(page) { this.navCtrl.push(Donate); }
  openAdvocate(page) { this.navCtrl.push(Advocate); }
  openVolunteer(page) { this.navCtrl.push(Volunteer); }

}
