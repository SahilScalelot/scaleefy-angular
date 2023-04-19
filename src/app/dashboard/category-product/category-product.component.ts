import { Component } from '@angular/core';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.sass']
})
export class CategoryProductComponent {
  productData:any

  // AddToCart
  addToCart(): void {
    this.productData = [{
      product_name: 'Twinkling Night Stud Earrings',
      product_price: "30 329.00",
      product_type: "women|earrings"
    }]
    console.log(this.productData)
    localStorage.setItem('cart',JSON.stringify(this.productData))
  }
}
