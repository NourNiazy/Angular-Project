import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/IProduct';
import { ISale } from '../Interfaces/ISale';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _url:string='/assets/Products/product.json';
  public _sale:string='/assets/Products/sale.json';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url);
  }

  getAllBestSeller():Observable<ISale[]>
  {
    return this.http.get<ISale[]>(this._sale);
  }

}
