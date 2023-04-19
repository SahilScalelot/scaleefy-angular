import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './about-us/about-us.component';
import { AccountInformationComponent } from './account-information/account-information.component';
import { AddressAccountInformationComponent } from './address-account-information/address-account-information.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { IndexComponent } from './index/index.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PersonalInfoEditComponent } from './personal-info-edit/personal-info-edit.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '', component: IndexComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'account-information', component: AccountInformationComponent
  },
  {
    path: 'address-account-information', component: AddressAccountInformationComponent
  },
  {
    path: 'category-product', component: CategoryProductComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'index', component: IndexComponent
  },
  {
    path: 'order-list', component: OrderListComponent
  },
  {
    path: 'personal-info-edit', component: PersonalInfoEditComponent
  },
  {
    path: 'single-product', component: SingleProductComponent
  },
  {
    path: 'wishlist', component: WishlistComponent
  }
];



@NgModule({
  declarations: [
    AboutUsComponent,
    AccountInformationComponent,
    AddressAccountInformationComponent,
    CategoryProductComponent,
    ContactUsComponent,
    FaqComponent,
    IndexComponent,
    OrderListComponent,
    PersonalInfoEditComponent,
    SingleProductComponent,
    WishlistComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule { }
