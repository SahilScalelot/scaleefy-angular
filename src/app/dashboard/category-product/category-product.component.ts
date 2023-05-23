import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.sass'],
})
export class CategoryProductComponent implements OnInit {
  productData: any = [
    {
      product_image: '../assets/images/product1.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30330.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
      product_date: '10-08-2020',
    },
    {
      product_image: '../assets/images/product2.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 999.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
      product_date: '10-08-2025',
    },
    {
      product_image: '../assets/images/product3.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 303299.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
      product_date: '10-08-2021',
    },
    {
      product_image: '../assets/images/product4.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product5.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product6.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product7.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product8.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product9.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product10.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product11.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product1.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product2.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product3.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product4.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
    {
      product_image: '../assets/images/product5.png',
      discount_offer: 'Flat 6% off',
      product_name: 'Twinkling Night Stud Earrings',
      product_price: 30329.0,
      market_price: '32265',
      product_type: 'women | earrings',
      product_quantity: 1,
    },
  ];

  constructor(private _cartService: GlobalService) {}

  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('favorite')!);
    this.productData = data || this.productData;
  }

  // AddToCart
  addToCart(cartData: any): void {
    this._cartService.addToLocalCart(cartData);
  }

  wishLists(wishListData: any, index: any): void {
    if (this.productData[index].color != 'red-600') {
      this.productData[index].color = 'red-600';
      this.productData[index].index = index;
      localStorage.setItem('favorite', JSON.stringify(this.productData));
    } else {
      console.log('primary')
      this.productData[index].color = 'primary';
      localStorage.setItem('favorite', JSON.stringify(this.productData));
    }
  }

  sortProductData(e: any): any {
    switch (e.target.value) {
      case 'mod1':
        console.log('sudeep');
        // if modo 1 is selected do something.
        break;
      case 'mod2':
        // if modo 2 is selected do something.
        console.log('sudeep');
        this.productData.sort((a: any, b: any) => {
          return a.product_price - b.product_price;
        });
        break;
      case 'mod3':
        // if modo 3 is selected do something.
        this.productData.sort((a: any, b: any) => {
          return b.product_price - a.product_price;
        });
        break;
      case 'mod4':
        // if modo 3 is selected do something.
        this.productData.sort((a: any, b: any) => {
          let da: any = new Date(a.product_date);
          let db: any = new Date(b.product_date);
          return db - da;
        });
        break;
    }
  }
}
