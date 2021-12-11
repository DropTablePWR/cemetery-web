import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared.module";
import {RouterModule, Routes} from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  {path: '', redirectTo: '/cemetery', pathMatch: 'full'},
  {path: 'cemetery/visit', component: DemoComponent},
  {path: '', loadChildren: () => import('./modules/cemetery/cemetery.module').then(m => m.CemeteryModule)},
];

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
