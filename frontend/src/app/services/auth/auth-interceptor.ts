import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        const authToken = this.authService.getToken()
        const authRequest = request.clone({
            headers: request.headers.set('Authorization', `Bearer ${authToken}`)
        })
        return next.handle(request)
    }
}