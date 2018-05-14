import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  data = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  submit() {
    console.log(this.data);
    
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Sign up successfully for '+this.data.FirstName,
      buttons: ['OK']
    });
    alert.present();
    this.data = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
  }
}
