import { Component, OnInit } from '@angular/core';
import {Checkout} from '../sharedfile/checkout';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor() { }
  checkoutModel =new Checkout("Nour","nourmostafa01551@gmail.com","Assuit","qusia","Mah","United Kingdom(uk)","123",123,"0123456789",+123-456,"+123-456");
  ngOnInit(): void {
  }

}
