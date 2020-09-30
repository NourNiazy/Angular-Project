
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public siteName="Canabia";
 logo='../../../assets/img/logo.png';
  title = 'Angular-Project';
   public count=0;
   public increaseCart(){
    console.log("xdcfvgbhj");
    this.count+=1;
  }
 /* navbarOpen = false;

toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}*/
@Input() product: any;
@Output() productRemoved = new EventEmitter();
modelChanged(product) {
   if (this.product.num === 0) {
    this.productRemoved.emit(this.product)
   }
}

}

