import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';

import { ButtonModule } from 'primeng/button';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [BookingBannerComponent, RouterModule, FormsModule, BreadcrumbComponent, ButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerObj: Register;

  constructor(private http: HttpClient, private router: Router) { 
    this.registerObj = new Register();
  }

  onRegister(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 

    this.http.post("https://localhost:7057/Customer/register", this.registerObj, { headers }).subscribe(
      (response: any) => 
      {
        if (response && response.success) {
          alert(response.success);
          this.router.navigateByUrl('/login');
        }
        else { alert(response.error || "An unknown error occurred.")}
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit(): void {
  }

  header: string = "Register";
}

export class Register {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  constructor(){
    this.firstname = "";
    this.lastname = "";
    this.username = "";
    this.password = "";
    this.email = "";
  }
}

