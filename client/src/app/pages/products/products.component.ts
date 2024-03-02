import { Component, OnInit } from '@angular/core';
import { Product2 } from '../../models/product2';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ApiService } from '../../services/api.service';
import { PRODUCTS } from '../../data/product-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BreadcrumbComponent, ButtonModule, CardModule, CommonModule],
templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  header = "Our Products";
  products: Product2[] = [];

  filters = [
    "All",
    "Canon",
    "Sony",
    "Panasonic",
    "Nikon",
    "DJI",
    "Blackmagic"
  ];

  constructor(private apiService: ApiService) {}
  
  ngOnInit() {

    this.apiService.getAllProducts().subscribe(
      (data : Product2[]) => {
      this.products = data;
      },
      (error) => {
        console.error('Error', error)
      }
    );
  }

};
