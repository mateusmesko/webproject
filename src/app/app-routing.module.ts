import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCustomerComponent } from './components/customer/list-customer/list-customer.component';
import { ListProductComponent } from './components/product/list-product/list-product.component';
import { IndexComponent } from './components/home/index/index.component';
import { RegisterCustomerComponent } from './components/customer/register-customer/register-customer.component';
import { RegisterProductComponent } from './components/product/register-product/register-product.component';
import { KartComponent } from './components/sale/kart/kart.component';

const routes: Routes = [
  { path: '',
  component:IndexComponent,
  pathMatch: 'full' },
  { path: 'customer',
  redirectTo: 'customer/list' },
  { path: 'customer/list',
  component: ListCustomerComponent },
  { path: 'customer/register',
    component: RegisterCustomerComponent
  },
  { path: 'customer/register/:id',
    component: RegisterCustomerComponent
  },

  { path: 'product',
  redirectTo: 'product/list' },
  { path: 'product/list',
  component: ListProductComponent },
  { path: 'product/register',
  component: RegisterProductComponent },
  { path: 'product/register/:id',
  component: RegisterProductComponent },

  {
    path: 'kart',
    component: KartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
