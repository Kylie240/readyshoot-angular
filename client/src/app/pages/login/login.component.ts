import { Component, OnInit } from '@angular/core';
import { BookingBannerComponent } from '../../components/booking-banner/booking-banner.component';
import { Button } from 'primeng/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [BookingBannerComponent, Button],
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
