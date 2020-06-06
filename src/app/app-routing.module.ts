import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatternComponent } from './presentation/pattern/pattern.component';
import { FaqComponent } from './presentation/faq/faq.component';
import { PractiseComponent } from './presentation/practise/practise.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'pattern',
    component: PatternComponent,
  },
  {
    path: 'practise',
    component: PractiseComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./presentation/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'skilltree',
    loadChildren: () =>
      import('./presentation/skill-tree/skill-tree.module').then(
        (m) => m.SkillTreeModule
      ),
  },
  {
    path: 'maturity',
    loadChildren: () =>
      import('./presentation/maturity/maturity.module').then(
        (m) => m.MaturityModule
      ),
  },
  {
    path: 'case-study',
    loadChildren: () =>
      import('./presentation/case-study/case-study.module').then(
        (m) => m.CaseStudyModule
      ),
  },
  {
    path: 'checklists',
    loadChildren: () =>
      import('./presentation/checklists/checklists.module').then(
        (m) => m.ChecklistsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
