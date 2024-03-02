import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { EasyBannerComponent } from '../../components/easy-banner/easy-banner.component';
import { SaveBannerComponent } from '../../components/save-banner/save-banner.component';
import { SelectionComponent } from '../../components/selection/selection.component';
import { BrandsComponent } from '../../components/brands/brands.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ButtonModule, FaqComponent,TestimonialsComponent, EasyBannerComponent, SaveBannerComponent, SelectionComponent, BrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
