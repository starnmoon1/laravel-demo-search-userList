import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './main/menu/menu.component';
import { InputSearchComponent } from './main/input-search/input-search.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserServiceService } from './user-service.service';
import { UserAddComponent } from './user/user-add/user-add.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InputSearchComponent,
    UserListComponent,
    UserAddComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
