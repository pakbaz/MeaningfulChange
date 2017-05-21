import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { VolunteerServiceProvider } from '../../providers/volunteer-service/volunteer-service';


@Component({
  selector: 'page-volunteer',
  templateUrl: 'volunteer.html',
  providers: [VolunteerServiceProvider]
})

export class Volunteer {

  public opportunities: any;

  constructor(public navCtrl: NavController, public platform: Platform, public volunteerOpportunities: VolunteerServiceProvider) {
    this.loadOpportunities();
  }

  loadOpportunities()
  {
    this.volunteerOpportunities.load()
    .then(data => {
      this.opportunities = data;
    });
  }

  openUrl(url) 
  {
    this.platform.ready().then(() => { open(url, '_blank', 'location = yes');})
  }

}
