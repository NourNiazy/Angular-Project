import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public Products=[];
  public Sales=[];

  page:number=1;
  pageSize:number=8;

  constructor(private GetAllProducts:ProductService,private GetAllBestSeller:ProductService) { }

  ngOnInit(): void {

    this.GetAllProducts.getAllProducts().subscribe(data=>this.Products=data);
    this.GetAllBestSeller.getAllBestSeller().subscribe(bestSeller=>this.Sales=bestSeller);
  
  }
   

}
