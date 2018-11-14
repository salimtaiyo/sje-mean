import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesTableComponent } from './components/resources-table/resources-table.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { FormulaTableComponent } from './components/formula-table/formula-table.component';
import { AuthGuard } from './components/auth/auth.guard';
import { ProjectTableComponent } from './components/project-table/project-table.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'resource', component: ResourcesTableComponent, canActivate: [AuthGuard] },
  { path: 'formula', component: FormulaTableComponent, canActivate: [AuthGuard] },
  { path: 'project', component: ProjectTableComponent, canActivate: [AuthGuard] },
  { path:'template', component:TemplateComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
