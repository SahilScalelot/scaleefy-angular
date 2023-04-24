import { Component } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';


@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.sass']
})
export class CategoryProductComponent {
  productData:any = [
    {
      product_image: "../assets/images/product1.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30330.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1,
      product_date:"10-08-2020"
    },
    {
      product_image: "../assets/images/product2.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 999.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1,
      product_date:"10-08-2025"
    },
    {
      product_image: "../assets/images/product3.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 303299.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1,
      product_date:"10-08-2021"
    },
    {
      product_image: "../assets/images/product4.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product5.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product6.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product7.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product8.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product9.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product10.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product11.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product1.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product2.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product3.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product4.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    },
    {
      product_image: "../assets/images/product5.png",
      discount_offer: "Flat 6% off",
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.00,
      market_price: "32265",
      product_type: "women | earrings",
      product_quantity: 1
    }
  ]

  constructor(private _cartService: GlobalService){}


  // AddToCart
  addToCart(cartData: any): void {
    this._cartService.addToLocalCart(cartData)
  }
}
