import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabindComponent } from './databind/databind.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'data',
    component:DatabindComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'register',
    component:RegisterComponent

  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'**',
    component:ErrorpageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
