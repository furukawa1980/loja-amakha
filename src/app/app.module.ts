import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from "./app.routes";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { TabsComponent } from './tabs/tabs.component';
import { OrderRequestComponent } from './order-request/order-request.component';

import { HomeService } from "./home/home.service";
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    ShippingDeliveryComponent,
    PaymentComponent,
    TabsComponent,
    OrderRequestComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
