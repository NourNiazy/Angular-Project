import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegiterserviceService {

  _url='http://localhost:4200/register';
  constructor(private _http : HttpClient) { 

  }
  register(UserData)
  {
    return this._http.post<any>(this._url,UserData);
  }
}
