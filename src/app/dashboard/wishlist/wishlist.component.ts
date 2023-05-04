import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass'],
})
export class WishlistComponent implements OnInit {
  wishList: any = [];
  constructor(private _wishList: GlobalService) {}

  ngOnInit(): void {
    let wishListData = JSON.parse(localStorage.getItem('favorite')!);
    for (let item of wishListData || []) {
      if (item.color == 'red-600') {
        this.wishList.push(item) || [];
      }
    }
  }

  removeWishList(index: any, data: any): void {
    this.wishList.splice(index, 1);
    let wishListData = JSON.parse(localStorage.getItem('favorite')!);
    wishListData[data].color = 'primary';
    localStorage.setItem('favorite', JSON.stringify(wishListData));
  }
}