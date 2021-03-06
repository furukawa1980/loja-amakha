import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FormsModule } from '@angular/forms';

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
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { ShoppingCartDropdownComponent } from './shopping-cart-dropdown/shopping-cart-dropdown.component';
import { ResponsiveMenuComponent } from './responsive-menu/responsive-menu.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

import { LazyLoadScriptService } from './lazy-load-script.service';
import { CarouselComponent } from './carousel/carousel.component';

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
    MenuComponent,
    UserDropdownComponent,
    ShoppingCartDropdownComponent,
    ResponsiveMenuComponent,
    SnackbarComponent,
    SidebarComponent,
    OrderDetailsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [HomeService, LazyLoadScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
