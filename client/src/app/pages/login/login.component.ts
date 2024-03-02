import { Component, OnInit } from '@angular/core';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BookingBannerComponent, BreadcrumbComponent, ButtonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginObj: Login;

  constructor(private http: HttpClient) { 
    this.loginObj = new Login();
  }

  onLogin() {
    this.http.post("http://localhost:8081/login", this.loginObj).subscribe((res:any) => {
      if (res.result){
        alert("Login successful")
      }
      else {
        alert(res.message)
      }
    })
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
