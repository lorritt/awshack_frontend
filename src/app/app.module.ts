import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PointsComponent } from './points/points.component';
import { AppRoutingModule } from './app-routing.module';
import { ChallengeNavComponent } from './challenge-nav/challenge-nav.component';
import { SplashComponent } from './splash/splash.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    ChallengeNavComponent,
    SplashComponent,
    LoginComponent,
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    RouterModule.forRoot([
      { path: 'challenge', component: ChallengeNavComponent },
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: '', component: SplashComponent},
      { path: '**', component: SplashComponent}
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
