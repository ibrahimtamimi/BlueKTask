import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
//import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import { UplodePicComponent } from './uplode-pic/uplode-pic.component';
import { DisplayPicComponent } from './display-pic/display-pic.component';
const ROUTES = [
  {
    path : 'uplode',
    component : UplodePicComponent
  },
  {
    path : 'display',
    component : DisplayPicComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UplodePicComponent,
    DisplayPicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
