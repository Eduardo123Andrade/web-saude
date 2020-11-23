import { Router } from '@angular/router';
import { HttpErrorRequest } from './../errors/HttpErrorHandler';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/services/auth/auth-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({})
  error: HttpErrorRequest = { isError: false, status: 0, errorMessage: '12312312' }
  showError: boolean = false
  constructor(public authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      crm: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  async login(loginFormValue: FormGroup) {
    this.error.isError = false
    try {
      if (this.loginForm.valid) {
        const auth = loginFormValue as unknown as AuthData
        const goTo = await this.authService.login(auth)
        if(goTo)
          this.route.navigate(['/home'])
      }
    } catch (err) {
      this.error = err.error
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }
}
