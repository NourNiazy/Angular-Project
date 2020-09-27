import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public Products=[];

  category_0:boolean=false;
  category_1:boolean=false;
  category_2:boolean=false; 
  category_3:boolean=false;

  constructor(private GetAllProducts:ProductService) { }

  ngOnInit(): void {

    this.GetAllProducts.getAllProducts().subscribe(data=>this.Products=data);
  }

  check(event,name){

    if(name=="all"){
      this.category_0=true;
      this.category_1=false;
      this.category_2=false; 
      this.category_3=false;
    }
    
    else if(name=="herbalists"){
      this.category_0=false;
      this.category_1=true;
      this.category_2=false; 
      this.category_3=false;
    }

    else if(name=="aromatic"){
      this.category_0=false;
      this.category_1=false;
      this.category_2=true; 
      this.category_3=false;
    }

    else if(name=="decoration"){
      this.category_0=false;
      this.category_1=false;
      this.category_2=false; 
      this.category_3=true;
    }

  }

}
