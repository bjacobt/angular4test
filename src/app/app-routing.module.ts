import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AddExpertComponent } from './add-expert/add-expert.component';


const routes: Routes = [
  
  { 
    path: 'home', 
    component: HomeComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'add', component: AddExpertComponent },
      { path: 'edit/:id', component: AddExpertComponent }
    ]

  },
  { path: '**', component: LoginComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}