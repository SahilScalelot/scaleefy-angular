import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BillingAddressComponent } from './billing-address/billing-address.component';
import { CartComponent } from './cart/cart.component';
import { DeliveredOrderComponent } from './delivered-order/delivered-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PlaceOrderSuccessComponent } from './place-order-success/place-order-success.component';
import { ReturnOrderStatusComponent } from './return-order-status/return-order-status.component';
import { ReturnedOrdersComponent } from './returned-orders/returned-orders.component';
import { ReviewOrderComponent } from './review-order/review-order.component';
import { ShippingAddressComponent } from './shipping-address/shipping-address.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {
    path: 'cart', component: CartComponent
  }
];

@NgModule({
  declarations: [
    BillingAddressComponent,
    CartComponent,
    DeliveredOrderComponent,
    OrderDetailsComponent,
    PaymentMethodsComponent,
    PlaceOrderSuccessComponent,
    ReturnOrderStatusComponent,
    ReturnedOrdersComponent,
    ReviewOrderComponent,
    ShippingAddressComponent,
    TrackOrderComponent,
    OrderListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    BillingAddressComponent,
    CartComponent,
    DeliveredOrderComponent,
    OrderDetailsComponent,
    PaymentMethodsComponent,
    PlaceOrderSuccessComponent,
    ReturnOrderStatusComponent,
    ReturnedOrdersComponent,
    ReviewOrderComponent,
    ShippingAddressComponent,
    TrackOrderComponent,
    OrderListComponent
  ]
})
export class OrderModule { }
