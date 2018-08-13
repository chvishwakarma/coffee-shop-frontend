import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
  { path: 'login', component: AppComponent },
  { path: '**', redirectTo: '/login' } // when routes path is not matching redirect to login
];

export const routing = RouterModule.forRoot(appRoutes);
