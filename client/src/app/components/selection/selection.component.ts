import { Component } from '@angular/core';
import { Camera } from '../../models/camera';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { Product2 } from '../../models/product2';
import { PRODUCTS } from '../../data/product-data';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [ButtonModule, TableModule, CommonModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {

  products: Product2[] = [];
  selectedProduct: Product2 = PRODUCTS[0];

  constructor(private apiService: ApiService) {
   }

  ngOnInit(): void {

    this.apiService.getFeatured().subscribe(
      (data : Product2[]) => {
        this.products = data;
        this.selectedProduct = this.products[0];
      },
      (error) => {
        console.error('Error', error)
      }
    );
  } 


  handleSelect(product: Product2): void{
    this.selectedProduct = product;
  }
}
