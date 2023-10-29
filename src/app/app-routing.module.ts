import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablegridComponent } from './tablegrid/tablegrid.component';

const routes: Routes = [
  {
    path:'tablegrid' ,component: TablegridComponent
  },
  {path:'data-table' ,component:TablegridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
