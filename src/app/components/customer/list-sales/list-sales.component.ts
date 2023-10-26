import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/shared/models/customer.model';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-sales',
  templateUrl: './list-sales.component.html',
  styleUrls: ['./list-sales.component.css']
})
export class ListSalesComponent implements OnInit{
  @Input() customer!: Customer;
  
  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
  
  }
}
