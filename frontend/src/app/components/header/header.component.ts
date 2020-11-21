import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private authListenerSubs: Subscription | undefined
  userIsAuthenticated: boolean = false

  constructor(private authService: AuthService) { }



  ngOnInit(): void {
    this.authListenerSubs =
      this.authService.getAuthStatusListener()
        .subscribe(isAuthenticated => {
          this.userIsAuthenticated = isAuthenticated
        })
  }

  ngOnDestroy() {
    if(this.authListenerSubs)
      this.authListenerSubs.unsubscribe()
  }

  logout() {
    this.authService.logout()
  }
}
