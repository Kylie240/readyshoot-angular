import { Component } from '@angular/core';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [BookingBannerComponent, ButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  header: string = "Contact";

}
