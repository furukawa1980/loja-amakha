import {Routes} from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingDeliveryComponent } from "./shipping-delivery/shipping-delivery.component"

export const ROUTES: Routes = [
    {path: 'HomeComponent', component: HomeComponent},
    {path: 'ShoppingCartComponent', component: ShoppingCartComponent},
    {path: '', component: ShippingDeliveryComponent}
]