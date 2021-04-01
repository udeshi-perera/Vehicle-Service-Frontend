import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListComponent } from './view-list/view-list.component';

const routes: Routes = [{
  path: 'viewData',
  component: ViewListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
