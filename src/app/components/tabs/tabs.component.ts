import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {Observable} from 'rxjs';
import {Category} from '../../Entities/category';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  categories: Category[];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getCategories();
    this.categories = [];
  }

  private getCategories() {
     this.catalogueService.getResource('categories').
    subscribe(data => {this.categories = data._embedded.categories; });
  }
}
