import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChallengeNavComponent } from './challenge-nav/challenge-nav.component';

const routes: Routes = [
    { path: 'challenge', component: ChallengeNavComponent },
    { path: '', pathMatch: 'full', redirectTo: 'splash',   }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
  })
export class AppRoutingModule { }

export const routableComponents = [
    ChallengeNavComponent
];
