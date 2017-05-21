import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-advocate',
  templateUrl: 'advocate.html'
})

export class Advocate {

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  OpenPledgeSite()
  {
    var url = "https://visitor.r20.constantcontact.com/manage/optin?v=001dbhkIZY57-BdIfJJpvgOsvWXPOxEo2jubHG3z4eP7IhynRzVbs6gf9PphfNhZBtcHnsyAyaPAgnoH03eBs3Vx2J3VA_nseHedhUi-rRrPEkSMlP_kkfdklbAehLEDhii7xCItr0vAfvjcDjV0HZ-y1q_3hV5HZDkbnGzRf_iEx40QaUhtsjgaUEShGJ8KWr9";

    this.platform.ready().then(() => { open(url, '_blank', 'location = yes');})
  }

}
