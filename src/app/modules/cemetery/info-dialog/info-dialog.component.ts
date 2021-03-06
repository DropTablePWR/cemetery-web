import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Guest} from "../../../interfaces/full-cemetery.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Guest
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onVisitClick(id: number) {
    console.log('odwiedzam: ' + id);
  }
}
