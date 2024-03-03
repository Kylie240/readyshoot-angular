import { Component, OnInit } from '@angular/core';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';
import { ButtonModule } from 'primeng/button';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BookingBannerComponent, RouterModule, BreadcrumbComponent, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginObj: Login;

  constructor(private http: HttpClient, private router: Router) { 
    this.loginObj = new Login();
  }

  onLogin(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    }); 

    this.http.post("http://localhost:8080/user/login", this.loginObj, { headers }).subscribe(
      (response: any) => {
        console.log(response);

      if (response && response.success) {
        alert(response.success);
        this.router.navigateByUrl('/products');
      }
      else alert(response.error)
      },
      (error) => {
        console.error(error);
      }
    )
  }

  ngOnInit(): void {
  }

  header: string = "Sign In";
}

export class Login {
  email: string;
  password: string;
  constructor(){
    this.email = "";
    this.password = "";
  }
}
