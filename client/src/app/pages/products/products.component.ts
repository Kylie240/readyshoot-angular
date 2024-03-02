import { Component, OnInit } from '@angular/core';
import { CAMERAS } from '../../data/camera-data';
import { Camera } from '../../models/camera';
import { Product2 } from '../../models/product2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {

  header = "Our Products";
  cameras : Camera[] = CAMERAS;
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

  constructor() {}
  
  ngOnInit() {
  }

};
