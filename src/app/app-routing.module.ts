import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAddComponent} from './user/user-add/user-add.component';
import {UserListComponent} from './user-list/user-list.component';


const routes: Routes = [
  { path: 'users/create', component: UserAddComponent },
  { path: 'users', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
