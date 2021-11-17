import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { CemeteryComponent } from './cemetery/cemetery.component';
import { SelectCemeteryComponent } from './select-cemetery/select-cemetery.component';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatGridListModule} from "@angular/material/grid-list";
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {MatTooltipModule} from "@angular/material/tooltip";

const routes: Routes = [
  {path: 'cemetery', component: SelectCemeteryComponent},
  {path: 'cemetery/:cemeteryId', component: CemeteryComponent},
  {path: '', loadChildren: () => import('../tombstone/tombstone.module').then(m => m.TombstoneModule)},
];



@NgModule({
  declarations: [
    CemeteryComponent,
    SelectCemeteryComponent,
    InfoDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [
    HttpClient,
  ],
})
export class CemeteryModule { }
