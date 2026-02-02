import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products : any[] = [
    {id:1, name:'iphone 15', price:2000 , quantity:5},
    {id:2, name:'iphone 16', price:3000, quantity:10},
    {id:3, name:'iphone 17', price:4000, quantity:15}
  ];
  
  buy(product: any) {
      product.quantity--;
  }
}