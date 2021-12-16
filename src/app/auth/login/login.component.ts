import { Component, Inject, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NB_WINDOW } from '@nebular/theme';
import { NbLoginComponent, NbAuthService, NB_AUTH_OPTIONS } from '@nebular/auth';

@Component({
  templateUrl: './login.component.html',
})
export class CustomLoginComponent extends NbLoginComponent {
  constructor(
    authService: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) options = {},
    cd: ChangeDetectorRef,
    router: Router,
    @Inject(NB_WINDOW) private window,
  ) {
    super(authService, options, cd, router);
  }

  login() {
    this.submitted = true;

    this.service.authenticate(this.strategy, this.user).subscribe(result => {
      this.submitted = false;

      const redirect = this.window.localStorage.getItem('back-url');
      this.window.localStorage.removeItem('back-url');
      if (redirect) {
        setTimeout(() => this.router.navigate([ redirect ]), this.redirectDelay);
      }

      this.cd.detectChanges();
    });
  }
}
