import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Device } from '@ionic-native/device';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { SignupPage } from '../pages/signup/signup';
import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // ListPage,
   // LoginPage,
   // SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    Ng2DeviceDetectorModule.forRoot(),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // LoginPage,
    // HomePage,
    // ListPage
  ],
  providers: [Device,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
