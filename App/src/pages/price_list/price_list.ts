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
  				{
  					name: 'Behrens Compost Soil',
  					price: '$27.00 Yard'
  				},
  				{
  					name: 'Pulverized Topsoil',
  					price: '$31.50 Yard'
  				},
  				{
  					name: 'Bulk Dirt',
  					price: '$22.00 Yard'
  				},
  				{
  					name: 'Garden Mix',
  					price: '$39.50 Yard'
  				},
  				{
  					name: 'Manure/Mushroom Compost',
  					price: '$33.00 Yard'
  				},
  				{
  					name: 'Peat Moss (2.2 cf)',
  					price: '$12.50 Bale'
  				}
  			]
  		},

  		{
  			title: 'Fertilizers',
  			products: 
  			[
  				{
  					name: 'Garden Starter (50lb Bag)',
  					price: '$25.50'
  				},
  				{
  					name: 'Weed and Feed (50 lb Bag)',
  					price: '$27.00'
  				},
  				{
  					name: 'Grub Control (30lb Bag)',
  					price: '$42.95'
  				},
  				{
  					name: 'Spot Weed Killer (22 oz Can)',
  					price: '$9.95'
  				}
  			]
  		},

  		{
  			title: 'Stone',
  			products: 
  			[
  				{
  					name: 'Road Stone #10',
  					price: '$38.50 Yard'
  				},
  				{
  					name: 'Grade 9 Gravel',
  					price: '$33.50 Yard'
  				},
  				{
  					name: 'FA 21 Screenings',
  					price: '$34.00 Yard'
  				},
  				{
  					name: '1 1/2" Washed #8 Stone',
  					price: '$35.50 Yard'
  				},
  				{
  					name: '3/4" Washed #6 Stone',
  					price: '$35.50 Yard'
  				},
  				{
  					name: 'Pea Stone',
  					price: '$29.00 Yard'
  				},
  				{
  					name: 'Limestone Screenings',
  					price: '$37.00 Yard'
  				},
  				{
  					name: 'Grade 8 Limestone',
  					price: '$38.00 Yard'
  				},
  				{
  					name: 'CA-711 Limestone',
  					price: '$46.25 Yard'
  				},
  				{
  					name: 'Rip Rap 1" - 3"',
  					price: '$46.00 Yard'
  				},
  				{
  					name: 'Torpedo Sand',
  					price: '$29.50 Yard'
  				},
  				{
  					name: 'Mason Sand',
  					price: '$33.00 Yard'
  				},
  				{
  					name: 'Recycled Concrete',
  					price: '$29.50 Yard'
  				},
  				{
  					name: 'Cobblestone',
  					price: '$180.00 Ton or .14 per pound'
  				},
  				{
  					name: 'Sandy Riverbed Stone',
  					price: '~'
  				},
  				{
  					name: 'Fond du Lac Stone',
  					price: '~'
  				},
  				{
  					name: 'Sienna Stone',
  					price: '~'
  				},
  				{
  					name: 'Chilton Stone',
  					price: '~'
  				},
  				{
  					name: 'Holy Boulders',
  					price: '~'
  				},
  				{
  					name: 'Weathered Stone',
  					price: '~'
  				}
  			]
  		},

  		{
  			title: 'Timbers and Supplies',
  			products: 
  			[
  				{
  					name: '6" x 6" x 8\' Pressure Treated Timber',
  					price: '$24.50'
  				},
  				{
  					name: '6" x 8" x 8\' Pressure Treated Timber',
  					price: '$31.95'
  				},
  				{
  					name: 'Timber Spikes',
  					price: '$.75 each or $62.00 a Box'
  				}
  			]
  		},
  		{
  			title: 'Grass Seed and Supplies',
  			products: 
  			[
  				{
  					name: 'Sunny Mix',
  					price: '$57.45 per 25 lb Bag or 2.60 per lb'
  				},
  				{
  					name: 'Shade Mix',
  					price: '$57.45 per 25 lb Bag or 2.60 per lb'
  				},
  				{
  					name: 'Sun and Shade Mix',
  					price: '$57.45 per 25 lb Bag or 2.60 per lb'
  				},
  				{
  					name: 'Contractors Mix',
  					price: '$49.25 per 25 lb Bag or 2.30 per lb'
  				},
  				{
  					name: 'Penn Mulch (50 lb bag)',
  					price: '$24.50'
  				},
  				{
  					name: 'Green Fiber Blanket (450 sq Feet)',
  					price: '$28.95 Yard'
  				},
  				{
  					name: 'Straw Blanket (900 sq Feet)',
  					price: '$34.00 Yard'
  				},
  				{
  					name: 'Staples',
  					price: '$.10 each or $29.95 per Box '
  				},
  				{
  					name: 'Straw Bale',
  					price: '$11.50'
  				},
  				{
  					name: 'Sod',
  					price: 'Call for Pricing'
  				}
  			]
  		},
  		{
  			title: 'Drainage Products',
  			products: 
  			[
  				{
  					name: '4" Perforated Drain Pipe (100 ft Roll)',
  					price: '$46.99'
  				},
  				{
  					name: '4" Perforated Drain Pipe (100 ft Roll with Sock)',
  					price: '$73.00'
  				},
  				{
  					name: '4" Solid Drain Pipe (100 ft Roll)',
  					price: '$46.99'
  				},
  				{
  					name: '4" PVC Perforated Drain Pipe (10 ft pipe)',
  					price: '$16.50'
  				},
  				{
  					name: '4" PVC Solid Drain Pipe (10 ft pipe)',
  					price: '$14.50'
  				},
  				{
  					name: '6" PVC Perforated Drain Pipe (10 ft pipe)',
  					price: '$26.50'
  				},
  				{
  					name: '4" Corrugatd Parts',
  					price: 'Various Prices'
  				},
  				{
  					name: '4" and 6" PVC Parts',
  					price: 'Various Prices'
  				}
  			]
  		},
  		{
  			title: 'Landscape Fabric, Edging, and Supplies',
  			products: 
  			[
  				{
  					name: 'Steel Edging',
  					price: '$65.00'
  				},
  				{
  					name: 'Snap Edge (8\' piece)',
  					price: '$13.75'
  				},
  				{
  					name: 'Stake Kit (4 metal stakes and connector)',
  					price: '$4.95'
  				},
  				{
  					name: 'Metal Stakes',
  					price: '$.70 each'
  				},
  				{
  					name: 'Twine',
  					price: '$28.50 roll'
  				},
  				{
  					name: 'Burlap Squares (36" x 36")',
  					price: '$2.25'
  				},
  				{
  					name: 'Stronghold Landscape Fabric (150 sq Feet)',
  					price: '$19.75'
  				},
  				{
  					name: 'Stronghold Landscape Fabric (1800 sq Feet)',
  					price: '$139.00'
  				},
  				{
  					name: 'Woven Needlepunch Fabric (1500 sq Feet)',
  					price: '$145.00'
  				},
  				{
  					name: 'Plastic Tarps (8\' x 10\'',
  					price: '$8.50'
  				},
  				{
  					name: 'White Marking Paint',
  					price: '$4.75'
  				},
  				{
  					name: 'Brick Glue',
  					price: '$4.25'
  				},
  				{
  					name: 'Polymeric Sand (Grey and Tan)',
  					price: '$33.50'
  				},
  				{
  					name: 'Concrete Mix (60 lb Bag)',
  					price: '$5.25'
  				}
  			]
  		},
  		{
  			title: 'Decorative Stone',
  			products: 
  			[
  				{
  					name: 'Large Meramec Nuggets',
  					price: '$~'
  				},
  				{
  					name: 'Red Lava Rock',
  					price: '$~'
  				},
  				{
  					name: 'Mexican Pebbles (30 lb Bag)',
  					price: '$18.50'
  				}
  			]
  		},
  		{
  			title: 'Salt',
  			products: 
  			[
  				{
  					name: 'White Rock Salt',
  					price: '$124.00 Ton'
  				},
  				{
  					name: 'White Rock Salt Direct Ship',
  					price: '$66.00 Ton + Delivery'
  				},
  				{
  					name: 'Treated Ice Melt',
  					price: '$134.00 Ton'
  				},
  				{
  					name: 'Treated Ice Melt Direct Ship',
  					price: '$78.00 Ton + Delivery'
  				},
  				{
  					name: 'White Rock Salt (50 lb Bag)',
  					price: '$4.15'
  				},
  				{
  					name: 'Treated Ice Melt (50 lb Bag)',
  					price: '$4.15'
  				}
  			]
  		}
  	]
  }

  goToDetails(num){
		this.navCtrl.push(PriceListDetailPage,{item: this.items[num]});
	}

}
