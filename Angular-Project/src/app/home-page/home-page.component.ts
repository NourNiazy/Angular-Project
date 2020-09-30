<<<<<<< HEAD
import { Component, OnInit ,Input} from '@angular/core';
=======
import {  Component, OnInit} from '@angular/core';
import { ProductService } from '../Services/product.service';
>>>>>>> 7b31974e95a335da0e33199ee02990c21ebb0ac6

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
<<<<<<< HEAD
  constructor() { }
=======
  public Sales=[];

  constructor(private GetAllBestSeller:ProductService) { }
>>>>>>> 7b31974e95a335da0e33199ee02990c21ebb0ac6

  ngOnInit(): void {
    this.GetAllBestSeller.getAllBestSeller().subscribe(bestSeller=>this.Sales=bestSeller);
  }

}
