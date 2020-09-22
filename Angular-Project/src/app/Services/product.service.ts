import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Interfaces/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public _url:string='/assets/Products/product.json';

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this._url);
  }

}
