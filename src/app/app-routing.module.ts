import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path:'auth',

    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path:'master',

    loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
  },
  {
    path:'**',
    redirectTo: 'auth'
  },
  {
    path: '',
    redirectTo: 'master',
    pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
