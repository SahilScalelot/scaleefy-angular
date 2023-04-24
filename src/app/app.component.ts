import { Component,OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'scaleefy';
  cartData: any;

  constructor(private _cartService: GlobalService){}

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('cart')!);
    this.cartData = data || [];
    
    this._cartService.cartData.subscribe((res:any)=>{
      if (res) {
        this.cartData = res;
      }    
    }) 
  }
}
