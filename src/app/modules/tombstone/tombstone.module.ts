import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { TombstoneComponent } from './tombstone/tombstone.component';
import { CreateTombstoneComponent } from './create-tombstone/create-tombstone.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from "@angular/material/button";

const routes: Routes = [
  {path: 'cemetery/:cemeteryId/create-tombstone/:x/:y', component: CreateTombstoneComponent},
];

@NgModule({
  declarations: [
    TombstoneComponent,
    CreateTombstoneComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule
  ],
  providers: [DatePipe]
})
export class TombstoneModule { }
