import { Component } from '@angular/core';
import { NbAuthService } from '@nebular/auth';

@Component({
  template: `<a routerLink="/auth/logout">Logout</a>`,
})
export class ProtectedComponent {}