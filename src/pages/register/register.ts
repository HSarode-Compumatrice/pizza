import { Component } from '@angular/core';
import { NavController, AlertController,NavParams, IonicPage} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { Ng2DeviceService } from 'ng2-device-detector';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Device } from '@ionic-native/device';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  deviceInfo = null;
  createSuccess = false;
  registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'',password:'' };
 
  constructor(private nav: NavController, private device: Device,private auth: AuthService,public navParams: NavParams,
    public alertCtrl: AlertController, private deviceService: Ng2DeviceService,private http: HttpClient) {
     // this.epicFunction();
     }
     items;
     public getuid()
     {
          var items=[{key:'uuid',value: this.device.uuid},
     {key:'model',value: this.device.model},
     {key:'manufacturer',value: this.device.manufacturer},
     {key:'version',value: this.device.version},
     {key:'platform',value: this.device.platform}
     ];
    // var items=[this.device]
     this.items=items;
    // console.log(this.device);
     }
     
    //  epicFunction() {
    //   console.log('hello `Home` component');
    //   this.deviceInfo = this.deviceService.getDeviceInfo();
    //   console.log(this.deviceInfo);     
    //   this.showPopup("DeviceInfo",JSON.stringify(this.deviceInfo));
    //     const req = this.http.post('https://eddup6z0oc.execute-api.us-east-2.amazonaws.com/Dev/onr-deviceinformation', {
    //             data: this.deviceInfo,
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //          // var header="content-type: application/json";
    //         })
    //           .subscribe(
    //             res => {
    //               console.log(res);
    //             },
    //             err => {
    //               console.log("Error occured");
    //             }
    //           );
 
    // }
  public register() {
    this.auth.register(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
      //  this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
      console.log(this.registerCredentials);
    },
      error => {
        this.showPopup("Error", error);
      });
      this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'',password:'' };  
  }
 
  showPopup(title, text) {
    //console.log(this.registerCredentials);
    // let alert = this.alertCtrl.create({
    //   title: title,
    //   subTitle: text,
    //   buttons: [
    //     {
    //       text: 'OK',
    //       handler: data => {
    //         if (this.createSuccess) {
    //           this.nav.popToRoot();
    //         }
    //       }
    //     }
    //   ]
    // });
    // alert.present();
   // this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'',password:'' };
  }  
}
