import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  cartData = new EventEmitter
  
  constructor() { }

  addToLocalCart(cartData:any): void {
    let allCartData:any=[]
    let localCart = localStorage.getItem('cart')
    
    if(!localCart){
      allCartData.push(cartData)
      localStorage.setItem('cart',JSON.stringify([cartData]))
    } else {
      allCartData = JSON.parse(localCart);
      allCartData.push(cartData)
      localStorage.setItem('cart',JSON.stringify(allCartData))
    }
    this.cartData.emit(allCartData)
  }

  removeToLocalCart(removeItems:any): void{
    localStorage.setItem('cart',JSON.stringify(removeItems))
    this.cartData.emit(removeItems)
  }

  allWishList(wishListData:any): void {
    localStorage.setItem("wishlist",JSON.stringify(wishListData))
  }
}
