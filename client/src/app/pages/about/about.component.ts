import { Component } from '@angular/core';
import { EasyBannerComponent } from '../../components/easy-banner/easy-banner.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [BreadcrumbComponent, EasyBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  header: string = "About";

}
