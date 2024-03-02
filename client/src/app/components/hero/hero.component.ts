import { Component, OnInit } from '@angular/core';
import { CAMERAS } from 'src/app/camera-data';
import { Camera } from 'src/app/models/camera';
import { Product2 } from 'src/app/models/product2';
import { PRODUCTS } from '../../product-data';
import { ApiService } from 'src/app/services/api.service';
import { City } from 'src/app/models/city';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})

export class HeroComponent implements OnInit {

  products: Product2[] = PRODUCTS;
  cameras: Camera[] = CAMERAS;

  cities: City[] = [
    {name: 'New York', code: 'NY'},
    {name: 'Atlanta', code: 'ATL'},
    {name: 'Houston', code: 'HU'},
    {name: 'Miami', code: 'MIA'},
    {name: 'Los Angeles', code: 'LA'}
  ];

  types: City[] = [
    {name: 'Microphone', code: 'mc'},
    {name: 'Camera', code: 'ca'},
    {name: 'Lens', code: 'ls'},
    {name: 'Camcorder', code: 'co'},
    {name: 'Lighting', code: 'li'},
    {name: 'Accesories', code: 'ac'}
  ];

  selectedCity = "";
  selectedType = "";
  endDate = "";
  startDate = "";

  constructor() {  }

  ngOnInit(): void {
  }

}
