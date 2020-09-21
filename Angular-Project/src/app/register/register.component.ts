import { Component, OnInit } from '@angular/core';
import {Userclass} from '../sharedfile/Userclass';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  States=["Aland Islands","Afghanistan","Albania","Gabon","Gambia","Georgia","Germany","Ghana","United Arab Emirates","United Kingdom(uk)","Zimbabwe"];
  StateHasErr=true;
  Countrys=["Aland Islands","Afghanistan","Albania","Gabon","Gambia","Georgia","Germany","Ghana","United Arab Emirates","United Kingdom(uk)","Zimbabwe"];
  CountryHasErr=true;
  userModel =new Userclass("ex:aml","ex:lotfy","","amllotfy136@gmail.com","assuit","assuit","United Kingdom(uk)","123","United Kingdom(uk)","0123456789","+123-456","","");
  

  ngOnInit(): void {
  }

}
