import { Component,OnInit } from '@angular/core';
console.log('cart module loaded')
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartData: any;

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('cart')!)
    this.cartData = data || [];
  }
}
