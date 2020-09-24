import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public ProductList=[
    {"id":0,"img_url":"http://webdesign-finder.com/html/canabia/images/shop/01.jpg","price":"$50.00","rate":4,"size":"XL","title":"Cannabis Flowers","txt":"Swine meatball shankle cow kielbasa burgdoggen shoulder andouille pork loin brisket leberkas."},
    {"id":1,"img_url":"http://webdesign-finder.com/html/canabia/images/shop/02.jpg","price":"$85.00","rate":3,"size":"S","title":"Cannabis Pre-Rolls","txt":"Pork andouille pig, beef ribs prosciutto sausage picanha leberkas ham hock cow. Kevin doner filet."},
    {"id":2,"img_url":"http://webdesign-finder.com/html/canabia/images/gallery/12.jpg","price":"$99.00","rate":2 ,"size":"XXL","title":"Concentrates","txt":"Biltong ribeye cupim meatloaf, burgd shoulder jerky pork loin turducken alcatra venison sirloin."},
    {"id":3,"img_url":"http://webdesign-finder.com/html/canabia/images/shop/03.jpg","price":"$70.00","rate":3 ,"size":"L","title":"Cannabis Oil","txt":"Pancetta t-bone ball tip pig buffalo, fatback filet mignon brisket frankfurter boudin jowl tenderloin."},
    {"id":4,"img_url":"http://webdesign-finder.com/html/canabia/images/shop/04.jpg","price":"$45.00","rate":4 ,"size":"M","title":"Concentrates","txt":"Biltong ribeye cupim meatloaf, burgd shoulder jerky pork loin turducken alcatra venison sirloin."},
    {"id":5,"img_url":".https://sc01.alicdn.com/kf/HTB1iPyPRXXXXXcsapXXq6xXFXXXS/Factory-Directly-Provided-Chinese-biluochun-Green-Tea.jpg","size":"XS","price":"$65.00","rate":3,"title":"Cannabis Pre-Rolls","txt":"Pork andouille pig, beef ribs prosciutto sausage picanha leberkas ham hock cow. Kevin doner filet."}

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
