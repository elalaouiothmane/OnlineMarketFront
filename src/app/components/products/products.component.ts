import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {Product} from '../../Entities/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products: Object = [];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.catalogueService.getResource('products').subscribe(
      data => {
        console.log(data);
        this.products = data;
      }
    );
  }
}
