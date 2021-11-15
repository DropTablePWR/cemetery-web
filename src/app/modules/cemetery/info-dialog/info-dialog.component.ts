import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {GuestInterface} from "../../../interfaces/guest.interface";

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
  styleUrls: ['./info-dialog.component.scss']
})
export class InfoDialogComponent{

  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GuestInterface
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onVisitClick(id: number) {
    console.log('odwiedzam: ' + id)
  }
}
