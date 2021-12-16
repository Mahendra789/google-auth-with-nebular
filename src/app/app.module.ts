
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule
} from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuardService } from './auth-guard.service';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

@NgModule({
  declarations: [AppComponent, LoginComponent, UserDetailsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ThemeModule.forRoot(),
    SocialLoginModule,
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,

    BrowserModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'userdetails', component: UserDetailsComponent, canActivate: [AuthGuardService]},
      {path: '**', component: LoginComponent}
    ]),
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('1025367527490-3n47sifg2pc7onfr6v4483b36v79285p.apps.googleusercontent.com')
        }
      ]
    }
  },
    AuthGuardService],
})
export class AppModule {
}
