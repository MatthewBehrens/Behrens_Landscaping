import { Component } from '@angular/core';
import { PriceListDetailPage } from '../price-list-detail/price-list-detail';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-price_list',
  templateUrl: 'price_list.html'
})
export class PriceListPage {
	public items: any;

  constructor(public navCtrl: NavController) {
  	this.items = [
  		{
  			title: 'Bark Mulches',
  			products: 
  			[
  				{
  					name: 'Southern Bark Mulch',
  					price: '$45.00 Yard'
  				},
  				{
  					name: 'Premium Hardwood Mulch',
  					price: '$37.50 Yard'
  				},
  				{
  					name: 'Behrens Hardwood Mulch',
  					price: '$27.25 Yard'
  				},
  				{
  					name: 'Eco Mulch',
  					price: '$17.95 Yard'
  				},
  				{
  					name: 'Cedar Mulch',
  					price: '$49.95 Yard'
  				},
  				{
  					name: 'Dyed Black Mulch',
  					price: '$29.95 Yard'
  				},
  				{
  					name: 'Dyed Red Mulch',
  					price: '$29.95 Yard'
  				},
  				{
  					name: 'Dyed Brown Mulch',
  					price: '$29.95 Yard'
  				},
  				{
  					name: 'Play Mulch',
  					price: '$29.00 Yard'
  				},
  				{
  					name: 'Arbor Chips',
  					price: '$9.00 Yard'
  				}
  			]
  		},

  		{
  			title: 'Organics',
  			products: 
  			[
  				{}
  			]
  		},

  		{
  			title: 'Fertilizers',
  			products: 
  			[
  				{}
  			]
  		},

  		{
  			title: 'Stone',
  			products: 
  			[
  				{}
  			]
  		},

  		{
  			title: 'Timbers and Supplies',
  			products: 
  			[
  				{}
  			]
  		},
  		{
  			title: 'Grass Seed and Supplies',
  			products: 
  			[
  				{}
  			]
  		},
  		{
  			title: 'Drainage Products',
  			products: 
  			[
  				{}
  			]
  		},
  		{
  			title: 'Landscape Fabric, Edging, and Supplies',
  			products: 
  			[
  				{}
  			]
  		},
  		{
  			title: 'Decorative Stone',
  			products: 
  			[
  				{}
  			]
  		},
  		{
  			title: 'Salt',
  			products: 
  			[
  				{}
  			]
  		}
  	]
  }

  goToDetails(num){
		this.navCtrl.push(PriceListDetailPage,{item: this.items[num]});
	}

}
