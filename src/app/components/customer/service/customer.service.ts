import { Injectable } from '@angular/core';

import { Customer } from 'src/app/shared/models/customer.model';

const LS_KEY: string = 'customer'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  listAll(): Customer[] {
    const customers = localStorage[LS_KEY];
    return customers ? JSON.parse(customers) : [];
  }

  insert(customer: Customer): void {
    const customers = this.listAll();
    customer.id = new Date().getTime();
    customers.push(customer);
    localStorage[LS_KEY] = JSON.stringify(customers);
  }

  findById(id: number): Customer | undefined {
    const customers: Customer[] = this.listAll();
    return customers.find(customer => customer.id === id);
  }

  update(customer: Customer): void {
    const customers: Customer[] = this.listAll();

    customers.forEach((obj, index, objs) => {
      if (customer.id === obj.id) {
        objs[index] = customer;
      }
    });

    localStorage[LS_KEY] = JSON.stringify(customers);
  }

  remove(id: number): void {
    let customers: Customer[] = this.listAll();

    customers = customers.filter(customer => customer.id !== id);
    localStorage[LS_KEY] = JSON.stringify(customers);
  }
}
