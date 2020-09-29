import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {ConfirmEqualValidatorDirective} from '../app/sharedfile/validatepassword.directive';
import{HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { CheckOutComponent } from './check-out/check-out.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
=======
import { TeamComponent } from './team/team.component';
>>>>>>> 8c2612242c1f7767c6b6418ae3fb1f15c13f797f
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CartComponent,
    ProductComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ConfirmEqualValidatorDirective,
<<<<<<< HEAD
    CheckOutComponent,
=======
    TeamComponent,
>>>>>>> 8c2612242c1f7767c6b6418ae3fb1f15c13f797f
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
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
 