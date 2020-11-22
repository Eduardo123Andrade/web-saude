import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/services/auth/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authData: AuthData = {
    crm: '', 
    password: ''
  }
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.authData)
  }

}
