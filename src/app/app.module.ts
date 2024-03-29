import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PeopleListComponent } from './people-list/people-list.component';

@NgModule({
  imports:      
  [ 
  BrowserModule, 
  FormsModule, 
  ReactiveFormsModule,
  RouterModule.forRoot([
      { path: '', component: PeopleListComponent },
    ]) ],
  declarations: [ AppComponent, HelloComponent, TopBarComponent, PeopleListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
