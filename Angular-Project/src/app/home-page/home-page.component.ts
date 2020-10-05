import {  Component, OnInit} from '@angular/core';
import { ProductService } from '../Services/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  public Sales=[];

  constructor(private GetAllBestSeller:ProductService) { }

  ngOnInit(): void {
    this.GetAllBestSeller.getAllBestSeller().subscribe(bestSeller=>this.Sales=bestSeller);
  }

}
