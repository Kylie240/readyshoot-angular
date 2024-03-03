import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';

import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
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

  constructor(private http: HttpClient) { 
    this.registerObj = new Register();
  }

  onReg(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 

    this.http.post("http://localhost:8080/user/register", this.registerObj, { headers }).subscribe(
      (response) => {
        alert(response);
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
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  constructor(){
    this.firstName = "";
    this.lastName = "";
    this.username = "";
    this.password = "";
    this.email = "";
  }
}

