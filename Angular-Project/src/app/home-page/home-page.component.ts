import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Input() public className="our-product";
  constructor() { }

  ngOnInit(): void {
  }

}
