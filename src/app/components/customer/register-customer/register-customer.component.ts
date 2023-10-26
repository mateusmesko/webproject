import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CustomerService } from '../service/customer.service';
import { Customer } from 'src/app/shared/models/customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})

export class RegisterCustomerComponent implements OnInit{
  @ViewChild("formCustomer") formCustomer! : NgForm;
  customer! : Customer;
  
  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    let id = + this.route.snapshot.params['id'];

    const res = this.customerService.findById(id);
    if(res !== undefined){
      this.customer = res;
    } else {
      this.customer = new Customer();
    }
  }

  update(): void{
    if(this.formCustomer.form.valid){
      if(this.customer.id){
        this.customerService.update(this.customer);
      } else {
        this.customerService.insert(this.customer);
      }
      this.router.navigate(['/customer'])
    }
  }
}
