import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from "./app.routes";
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingDeliveryComponent } from './shipping-delivery/shipping-delivery.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PaymentComponent } from './payment/payment.component';
import { TabsComponent } from './tabs/tabs.component';
import { OrderRequestComponent } from './order-request/order-request.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShoppingCartComponent,
    ShippingDeliveryComponent,
    PaymentComponent,
    TabsComponent,
    OrderRequestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
