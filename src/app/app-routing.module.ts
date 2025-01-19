import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { UserComponent } from './user/user.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'manager', component:ManagerComponent},
  {path:'user', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
