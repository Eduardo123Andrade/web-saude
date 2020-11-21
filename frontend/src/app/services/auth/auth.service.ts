import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data';
import { environment } from "../../../environments/environment.prod";
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl + "/doctor"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new Subject<boolean>()
  private token: string | null = null
  private isAuthenticated = false


  constructor(private httpClient: HttpClient, private router: Router) { }

  login(authData: AuthData) {
    const link = `${BACKEND_URL}/auth/login`
    this.httpClient.post<{ token: string }>(link, authData)
      .subscribe(response => {
        const token = response.token
        this.token = token
        if (token) {
          this.isAuthenticated = true
          this.authStatusListener.next(true)
          this.router.navigate(['/home'])
        }
      })
  }

  logout(){
    this.token = null
    this.isAuthenticated = false
    this.authStatusListener.next(false)
    this.router.navigate(['/login'])
  }

  getToken(): string | null {
    return this.token
  }

  getAuthStatusListener(): Observable<boolean> {
    return this.authStatusListener.asObservable()
  }

  getIsAuth(): boolean {
    return this.isAuthenticated
  }
}
