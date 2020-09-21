import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ConfirmEqualValidatorDirective} from '../app/sharedfile/validatepassword.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    ProductComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ConfirmEqualValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class NavigationMenuItemComponent {
  private _iconClass: any;
  static ID_PREFIX: any;
  
  set iconClass(iconClass) {
         this._iconClass = NavigationMenuItemComponent.ID_PREFIX + iconClass;
     }

     //ngOnInit(): void {}
 }