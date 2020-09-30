import { Injectable } from '@angular/core';
import { IProduct } from '../Interfaces/IProduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ItemProductService {
  Products: IProduct[];
  SaleProducts: IProduct[];

  constructor(private GetAllProducts: ProductService) {
    this.GetAllProducts.getAllProducts().subscribe(data => this.Products = data);
    this.GetAllProducts.getAllBestSeller().subscribe(data => this.SaleProducts = data);
  }

  findAll(): IProduct[] {
    return this.Products;
  }

  findAllSaleProduct(): IProduct[] {
    return this.SaleProducts;
  }
  find(id: number): IProduct {
    return this.Products[this.getSelectedIndex(id)];
  }
  getSelectedIndex(id: number) {
    for (var i = 0; i < this.Products.length; i++) {
      if (this.Products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  ngOnInit(): void { }


}
