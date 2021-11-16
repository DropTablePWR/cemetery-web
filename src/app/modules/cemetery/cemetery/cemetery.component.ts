import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CemeteryInterface} from "../../../interfaces/cemetery.interface";
import {CemeteryService} from "../cemetery.service";
import {TombstoneService} from "../../tombstone/tombstone.service";
import {CemeteryForbiddenPositionsInterface} from "../../../interfaces/cemetery-forbidden-positions.interface";
import {TombstonesWithCoordinatesInterface} from "../../../interfaces/tombstones-with-coordinates.interface";
import {TombstoneInterface} from "../../../interfaces/tombstone.interface";
import {GuestInterface} from "../../../interfaces/guest.interface";
import {MatDialog} from "@angular/material/dialog";
import {InfoDialogComponent} from "../info-dialog/info-dialog.component";


@Component({
  selector: 'app-cemetery',
  templateUrl: './cemetery.component.html',
  styleUrls: ['./cemetery.component.scss']
})
export class CemeteryComponent implements OnInit {

  id!: number;
  selectedCemetery?: CemeteryInterface;

  tombstonesWithCoordinates: TombstonesWithCoordinatesInterface[] = [];
  tombstonesList: TombstoneInterface[] = [];
  guestList: GuestInterface[] = [];

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private cemeteryService: CemeteryService,
    public tombstoneService: TombstoneService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.cemeteryId;
    });

    //this.cemeteryService.fetchCemetery(this.id);

    this.selectedCemetery = this.cemeteryService.cemeteriesList
      .find((cemetery: CemeteryInterface) => cemetery.id = this.id);
    this.tombstonesList = this.tombstoneService.tombstonesList;
    this.guestList = this.tombstoneService.guestList;
    this.tombstonesWithCoordinates = this.makeCoordinatesAndImageTables(this.selectedCemetery!, this.cemeteryService.cemeteryForbiddenPositionsList, this.tombstonesList)
  }

  makeCoordinatesAndImageTables(cemetery: CemeteryInterface, cemeteryForbiddenPositionsList: CemeteryForbiddenPositionsInterface[], tombstonesList: TombstoneInterface[]): TombstonesWithCoordinatesInterface[] {
    let tombstonesWitchCoordinates: TombstonesWithCoordinatesInterface[] = [];
    for (let x = 0; x < cemetery.max_grid_x; x++) {
      for (let y = 0; y < cemetery.max_grid_y; y++) {
        let tombstone: TombstonesWithCoordinatesInterface = {
          x: x,
          y: y,
          t: 'Book it...',
        };
        tombstonesWitchCoordinates.push(tombstone);
      }
    }
      cemeteryForbiddenPositionsList.map((cemeteryForbiddenPosition) => {
        tombstonesWitchCoordinates.map((tombstoneWitchCoordinates, index) => {
          if (tombstoneWitchCoordinates.y >= cemeteryForbiddenPosition.from_x1 && tombstoneWitchCoordinates.y <= cemeteryForbiddenPosition.from_x2) {
            if (tombstoneWitchCoordinates.x >= cemeteryForbiddenPosition.from_y1 && tombstoneWitchCoordinates.x <= cemeteryForbiddenPosition.from_y2) {
              tombstonesWitchCoordinates[index].t = null
            }
          }
        })
      });

      tombstonesList.map((tombstone) => {
       let tempTombstone = tombstonesWitchCoordinates.find((t) => (tombstone.grid_x === t.x && tombstone.grid_y === t.y));
        tempTombstone!.t = '';
        tempTombstone!.guest = this.guestList.find((g) => g.tombstone_id === tombstone.id)!
      });
      return tombstonesWitchCoordinates;
  }

  createNewTombstone(x: number | string, y: number | string) {
    this.router.navigateByUrl(`cemetery/${this.id}/create-tombstone/${x}/${y}`)

  }

  openDialog(guest: GuestInterface) {
    this.dialog.open(InfoDialogComponent, {data: guest});
  }

}

