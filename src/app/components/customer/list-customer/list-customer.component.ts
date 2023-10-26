import { Component, OnInit } from '@angular/core';

import { CustomerService } from '../service/customer.service';
import { Customer } from 'src/app/shared/models/customer.model';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListSalesComponent } from '../list-sales/list-sales.component';
import { RegisterCustomerComponent } from '../register-customer/register-customer.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit{
  customers: Customer[] = []

  constructor(private custumerService : CustomerService,
              private modalService: NgbModal,
              private route: ActivatedRoute,
              private router: Router){}
  ngOnInit():void{
    this.customers = this.listAll();
  }
  
  listAll():Customer[] {
    return this.custumerService.listAll()
  }
  
  remove($event: any, customer: Customer): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o cadastro com nome ${customer.firstName}?`)) {
      this.custumerService.remove(customer.id!);
      this.customers = this.listAll();
    }
  }

  openModal(customer: Customer) {
    const modalRef = this.modalService.open(ListSalesComponent);
    modalRef.componentInstance.customer = customer;
  }

  goRoute(router: string){
    this.router.navigate([router])
  }
}
