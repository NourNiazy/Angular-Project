import { Component, OnInit } from '@angular/core';
import {Checkout} from '../sharedfile/checkout';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {

  constructor() { }
  checkoutModel =new Checkout("Ex:Nour","nourmostafa01551@gmail.com","Assuit","qusia","Mah",123,"visa","1111-2222-333",2022,9,123);
  ngOnInit(): void {
  }

}
