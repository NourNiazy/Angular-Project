import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public Products=[];

  constructor(private GetAllProducts:ProductService) { }

  ngOnInit(): void {

    this.GetAllProducts.getAllProducts().subscribe(data=>this.Products=data);
  }

}
