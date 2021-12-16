import { NgModule } from '@angular/core';
import { NbAuthModule } from '@nebular/auth';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  imports: [
    AuthRoutingModule,
    NbAuthModule,
  ],
})
export class AuthModule {}