import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CemeteryService} from "../cemetery.service";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";
import {FieldEnum, FullCemeteryInterface, Guest} from "../../../interfaces/full-cemetery.interface";


@Component({
  selector: 'app-cemetery',
  templateUrl: './cemetery.component.html',
  styleUrls: ['./cemetery.component.scss']
})
export class CemeteryComponent implements OnInit {

  _fieldEnum: typeof FieldEnum = FieldEnum;
  id!: number;
  selectedCemetery2!: FullCemeteryInterface;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private cemeteryService: CemeteryService,
    public dialog: MatDialog,
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.id = params.cemeteryId;
    });
    await this.cemeteryService.fetchFullCemetery(this.id);
    this.selectedCemetery2 = this.cemeteryService.fullCemetery;
  }

  createNewTombstone(x: number | string, y: number | string) {
    this.router.navigateByUrl(`cemetery/${this.id}/create-tombstone/${x}/${y}`)
  }

  openDialog(guest: Guest) {
    this.dialog.open(InfoDialogComponent, {data: guest});
  }
}

