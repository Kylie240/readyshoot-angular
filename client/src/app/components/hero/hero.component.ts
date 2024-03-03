import { Component, OnInit } from '@angular/core';
import { CAMERAS } from '../../data/camera-data';
import { Camera } from '../../models/camera';
import { Product2 } from '../../models/product2';
import { PRODUCTS } from '../../data/product-data';
import { City } from '../../models/city';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ButtonModule, CalendarModule, DropdownModule, FormsModule],
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

  // types = [
  //   "Camcorder",
  //   "Action Camera",
  //   "Lens",
  //   "DSLR",
  //   "Mirrorless"
  // ]

  selectedCity = "";
  selectedType = "";
  endDate = "";
  startDate = "";

  constructor(private http: HttpClient) {  }

  ngOnInit(): void {
  }

}
