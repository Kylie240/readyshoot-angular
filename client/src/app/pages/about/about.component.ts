import { Component } from '@angular/core';
import { EasyBannerComponent } from '../../components/easy-banner/easy-banner.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent, EasyBannerComponent, BookingBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  header: string = "About";

}
