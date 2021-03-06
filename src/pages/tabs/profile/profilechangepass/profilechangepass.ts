import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobaldataProvider } from '../../../../providers/globaldata/globaldata';

/**
 * Generated class for the ProfilechangepassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilechangepass',
  templateUrl: 'profilechangepass.html',
})
export class ProfilechangepassPage { 
  public user: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public gs: GlobaldataProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilechangepassPage');
  }
  submit() {
    this.navCtrl.pop();
  }

}
