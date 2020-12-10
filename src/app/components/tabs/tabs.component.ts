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
  categories: Object = [];
  constructor(private catalogueService: CatalogueService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  private getCategories() {
     this.catalogueService.getResource('categories').
    subscribe(data => {
      console.log(data);
      this.categories = data;

    });
  }
}
