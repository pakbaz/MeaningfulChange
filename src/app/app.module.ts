import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Report } from '../pages/report/report';
import { Donate } from '../pages/donate/donate';
import { DonateConfirmation } from '../pages/donate-confirmation/donate-confirmation';
import { Advocate } from '../pages/advocate/advocate';
import { Volunteer } from '../pages/volunteer/volunteer';

import { VolunteerServiceProvider } from '../providers/volunteer-service/volunteer-service';

import { UniqueDeviceID } from '@ionic-native/unique-device-id';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Donate,
    DonateConfirmation,
    Report,
    Advocate,
    Volunteer
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Donate,
    DonateConfirmation,
    Report,
    Advocate,
    Volunteer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VolunteerServiceProvider,
    UniqueDeviceID
  ]
})
export class AppModule {}
