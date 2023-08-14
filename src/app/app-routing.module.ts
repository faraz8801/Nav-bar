import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { GroupRegistrationComponent } from './group-registration/group-registration.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [

{

  path: '',
  component: LoginComponent
}
,
{
  path:'registration',
  component:RegistrationComponent
}
,
{

  path: 'group-registration',
  component:GroupRegistrationComponent
}
,
{

  path:'home',
  component: HomeComponent
},

{
  path:'footer',
  component: FooterComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
