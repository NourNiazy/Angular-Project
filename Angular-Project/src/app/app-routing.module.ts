import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CheckOutComponent } from './check-out/check-out.component';
const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'product',component:ProductComponent},
  {path:'cart',component:CartComponent},
  {path:'register',component:RegisterComponent},
  {path:'check-out',component:CheckOutComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }