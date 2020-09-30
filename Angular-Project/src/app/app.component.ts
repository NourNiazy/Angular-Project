import { Component } from '@angular/core';

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

}

