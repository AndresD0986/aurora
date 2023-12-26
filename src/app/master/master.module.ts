import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { MasterPageComponent } from './pages/master-page/master-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MasterLayoutComponent,
    MasterPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    MaterialModule
  ]
})
export class MasterModule { }
