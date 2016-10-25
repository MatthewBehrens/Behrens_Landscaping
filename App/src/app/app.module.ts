import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { YardagePage } from '../pages/yardage/yardage';
import { PriceListPage } from '../pages/price_list/price_list';
import { PriceListDetailPage } from '../pages/price-list-detail/price-list-detail';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    YardagePage,
    PriceListPage,
    HomePage,
    TabsPage,
    PriceListDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    YardagePage,
    PriceListPage,
    HomePage,
    TabsPage,
    PriceListDetailPage
  ],
  providers: []
})
export class AppModule {}
