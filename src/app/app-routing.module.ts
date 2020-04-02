import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './module/home/home.component';
import { AuthGuard } from './core/guard';
import { LoginComponent } from './module/login/login.component';
import { AdminComponent } from './module/admin/admin.component';
import { Role } from './shared/enum/role.enum';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  { path: 'login', component: LoginComponent },
  { path: 'form', loadChildren: () => import('./module/form/form.module').then(m => m.FormModule) },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
