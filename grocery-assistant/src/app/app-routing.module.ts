import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NeedHelpComponent } from './need-help/need-help.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: 'login',component: LoginComponent},
  {path: 'need-help', component: NeedHelpComponent, canActivate:[AuthGuard]},
  {path: 'volunteer', component: VolunteerComponent, canActivate:[AuthGuard]},
  {path: '**', redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
