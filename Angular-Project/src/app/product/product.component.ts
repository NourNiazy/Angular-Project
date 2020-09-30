import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from '../Interfaces/IProduct';
import { ItemProductService } from '../Services/item-list.service';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public Products: IProduct[]; 
  public Sales: IProduct[];

  page:number=1;
  pageSize:number=8;

  constructor(private GetAllProductsService:ItemProductService) {
    this.Products = this.GetAllProductsService.findAll();
    this.Sales = this.GetAllProductsService.findAllSaleProduct();

   }

  ngOnInit(): void {

  
  }
   

}
