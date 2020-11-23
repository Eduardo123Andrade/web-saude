import { HttpErrorHandler } from './../../errors/HttpErrorHandler';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData } from './auth-data';
import { environment } from "../../../environments/environment.prod";
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

const BACKEND_URL = environment.apiUrl + "/doctors"

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatusListener = new Subject<boolean>()
  private token: string | null = null
  private isAuthenticated = false
  private tokenTimer!: NodeJS.Timer;


  constructor(private httpClient: HttpClient, private router: Router) { }

  async login(authData: AuthData): Promise<boolean> {
    const link = `${BACKEND_URL}/auth/login`
    return this.httpClient.post<{ token: string, expiresIn: number }>(link, authData)
      .toPromise()
      .then(response => {
        const token = response.token
        if (token) {
          this.token = token
          const expiresInDuration = response.expiresIn
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true
          this.authStatusListener.next(true)
          const now = new Date()
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000)
          this.saveAuthData(token, expirationDate)
        }
        return !!token
      }).catch(err => {
        throw new HttpErrorHandler({ status: err.status, errorMessage: err.error.message, isError: true })
      })
  }

  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => this.logout(), duration * 1000);
  }

  logout() {
    this.token = null
    this.isAuthenticated = false
    this.authStatusListener.next(false)
    clearTimeout(this.tokenTimer)
    this.clearAuthData()
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

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token)
    localStorage.setItem('expiration', expirationDate.toISOString())
  }

  private clearAuthData() {
    localStorage.removeItem('token')
    localStorage.removeItem('expiration')
  }

  autoAuthUser() {
    const authInformation = this.getAuthData()
    if (!authInformation) return

    const now = new Date();
    const expiresIn = authInformation!.expirationDate.getTime() - now.getTime()
    if (expiresIn > 0) {
      this.token = authInformation!.token
      this.isAuthenticated = true
      this.setAuthTimer(expiresIn / 1000)
      this.authStatusListener.next(true)
    }
  }

  private getAuthData() {
    const token = localStorage.getItem('token')
    const expirationDate = localStorage.getItem('expiration')
    if (!token || !expirationDate) return

    return {
      token,
      expirationDate: new Date(expirationDate)
    }
  }


}
