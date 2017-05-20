import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Report } from '../pages/report/report';
import { Donate } from '../pages/donate/donate';
import { Advocate } from '../pages/advocate/advocate';
import { Volunteer } from '../pages/volunteer/volunteer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Donate,
    Report,
    Advocate,
    Volunteer
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Donate,
    Report,
    Advocate,
    Volunteer
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
