import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { YardagePage } from '../yardage/yardage';
import { PriceListPage } from '../price_list/price_list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = YardagePage;
  tab3Root: any = PriceListPage;

  constructor() {

  }
}
