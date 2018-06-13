import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnsenModule } from 'ngx-onsenui';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PointsComponent } from './points/points.component';
import { AppRoutingModule } from './app-routing.module';
import { ChallengeNavComponent } from './challenge-nav/challenge-nav.component';
import { SplashComponent } from './splash/splash.component';
import { MenuComponent } from './menu/menu.component';
import { SidePageComponent } from './sidepage/sidepage.component';
import { MenuService } from './menu.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { CommuteComponent } from './commute/commute.component';
import { GitComponent } from './git/git.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    ChallengeNavComponent,
    SplashComponent,
    MenuComponent,
    SidePageComponent,
    LoginComponent,
    HomeComponent,
    TeamComponent,
    CommuteComponent,
    GitComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    OnsenModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot([
      { path: 'challenge', component: MenuComponent },
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'team', component: TeamComponent},
      { path: 'commute', component: CommuteComponent},
      { path: '', component: SplashComponent},
      { path: '**', component: SplashComponent}
    ]),
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
