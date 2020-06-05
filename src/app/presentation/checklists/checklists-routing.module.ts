import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistsComponent } from './checklists.component';

const routes: Routes = [
  {
    path: ':name',
    component: ChecklistsComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'sample' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChecklistsRoutingModule {}
