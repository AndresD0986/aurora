import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';

const routes: Routes = [

  {
    path:'',
    component: MasterLayoutComponent,
    children: [
      {path:'new', component: NewPageComponent},
      {path:'search', component: SearchPageComponent},
      {path:'edit/:id', component: NewPageComponent},
      {path:'list', component: ListPageComponent},
      {path:':id', component: MasterPageComponent},
      {path:'**', redirectTo: 'list'}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
