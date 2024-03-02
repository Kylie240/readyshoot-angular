import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { FAQS } from '../../data/faq-data';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule, CommonModule],
templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

  faqs = FAQS;

}
