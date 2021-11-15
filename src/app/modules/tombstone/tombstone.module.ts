import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TombstoneComponent } from './tombstone/tombstone.component';
import { CreateTombstoneComponent } from './create-tombstone/create-tombstone.component';


const routes: Routes = [
  {path: 'cemetery/:cemeteryId/:tombstoneId', component: TombstoneComponent},
  {path: 'cemetery/:cemeteryId/create-tombstone', component: CreateTombstoneComponent},
];

@NgModule({
  declarations: [
    TombstoneComponent,
    CreateTombstoneComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TombstoneModule { }
