import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../app/dashboard/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('../app/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'order',
    loadChildren: () => import('../app/order/order.module').then(m => m.OrderModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ initialNavigation:'enabledBlocking', scrollPositionRestoration:  "enabled" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
