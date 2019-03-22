import {Routes} from "@angular/router"

import { HomeComponent } from "./home/home.component"
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


export const ROUTES: Routes = [
    {path: '', component: ShoppingCartComponent}
]