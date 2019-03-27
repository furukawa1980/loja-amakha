
import {Routes} from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingDeliveryComponent } from "./shipping-delivery/shipping-delivery.component"
import { PaymentComponent } from './payment/payment.component';
import { OrderRequestComponent } from './order-request/order-request.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'shipping-delivery', component: ShippingDeliveryComponent},
    {path: 'payment', component: PaymentComponent},
    {path: 'order-request', component: OrderRequestComponent}
]