import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/products.model';
import { ProductsService } from '../../product/service/product.service';

@Component({
  selector: 'app-kart',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {
  products: Product[] = [];
  cart: Product[] = []; // Array para representar o carrinho

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.listAll();
  }

  listAll(): Product[] {
    return this.productService.listAll();
  }

  addToCart(product: Product): void {

    this.cart.push(product); // Adicione o produto ao carrinho

  }

  saveSale(): void {
    let client = {
      id:'12345678909',
      cpf:'12345678909',
      name:'nome do cliente',
      secondName:'nome do cliente',
      itens:this.cart
    }
    localStorage.setItem('cart', JSON.stringify(client));
    console.log('Venda salva no carrinho:', client);
  }
}
