import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

/*
  Generated class for the PriceListDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-price-list-detail',
  templateUrl: 'price-list-detail.html'
})
export class PriceListDetailPage {

	public item: any;

  constructor(public navCtrl: NavController, public params:NavParams) {
  	this.item = params.get("item")
  }

  ionViewDidLoad() {
    console.log('Hello PriceListDetail Page');
  }

}
