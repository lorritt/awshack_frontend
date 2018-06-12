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
import { MenuComponent } from './menu/menu.component';
import { SidePageComponent } from './sidepage/sidepage.component';
import { ContentPageComponent } from './contentpage/contentpage.component';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    PointsComponent,
    ChallengeNavComponent,
    SplashComponent,
    MenuComponent,
    SidePageComponent,
    ContentPageComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  imports: [
    BrowserModule,
    OnsenModule,
    RouterModule.forRoot([
      { path: 'challenge', component: ChallengeNavComponent },
      { path: '', component: SplashComponent},
      { path: '**', component: SplashComponent}
    ]),
    AppRoutingModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
