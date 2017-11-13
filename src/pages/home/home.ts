import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  bio()
  {
    this.navCtrl.push('BioPage');
  }
  edu()
  {
    this.navCtrl.push('EduPage');
  }
  we()
  {
    this.navCtrl.push('WePage');
  }

}
