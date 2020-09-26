import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  public ProductList=[];
 

  constructor( private GetAllProducts:ProductService) { }

  ngOnInit(): void {
    this.GetAllProducts.getAllProducts().subscribe(data=>this.ProductList=data);

  }

}
