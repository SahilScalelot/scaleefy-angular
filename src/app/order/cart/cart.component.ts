import { Component,OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
console.log('cart module loaded')
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartData: any;
  subTotal:any = [];
  shippingCharge:number = 228
  total:any

  constructor(private _cartService: GlobalService){}

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('cart')!)
    this.cartData = data || [];
    console.log(this.cartData)
    let sum=0
    // for(let i=0;i<=data?.length-1;i++){
    //   sum += this.cartData[i].product_price
    // }
    for(let cartData of data){
      sum += cartData.product_price
    } 
    this.subTotal = sum
    console.log(26,this.subTotal)
    this.total = this.subTotal + this.shippingCharge
  }

  onDecrement(index: any): void {
    let sum = 0;

    if(this.cartData[index].product_quantity>1){
      let number = this.cartData[index].product_quantity
      this.cartData[index].product_quantity = number - 1
      this.cartData[index].product_price = (this.cartData[index].product_price/(this.cartData[index].product_quantity+1)) * this.cartData[index].product_quantity
      console.log(this.cartData[index].product_price)
    }
    
    for(let i=0;i<=this.cartData.length-1;i++){
      sum += this.cartData[i].product_price
    }
    this.subTotal = sum
    this.total = this.subTotal + this.shippingCharge 
  }

  onIncrement(index:any): void {
    let sum = 0;

    if(this.cartData[index].product_quantity<5){
      let number = this.cartData[index].product_quantity
      this.cartData[index].product_quantity=number + 1  
      this.cartData[index].product_price = (this.cartData[index].product_price/(this.cartData[index].product_quantity-1)) * this.cartData[index].product_quantity
    }
    
    for(let i=0;i<=this.cartData.length-1;i++){
      sum += this.cartData[i].product_price
    }
    this.subTotal = sum
    this.total = this.subTotal + this.shippingCharge  
  }

  removeItemsCart(index:any): void {
    let sum = 0;
    if (index > -1) { // only splice array when item is found
      this.cartData.splice(index, 1); // 2nd parameter means remove one item only
      this._cartService.removeToLocalCart(this.cartData)
    }

    for(let i=0;i<=this.cartData.length-1;i++){
      sum += this.cartData[i].product_price
    }
    this.subTotal = sum
    this.total = this.subTotal + this.shippingCharge
  }
}
