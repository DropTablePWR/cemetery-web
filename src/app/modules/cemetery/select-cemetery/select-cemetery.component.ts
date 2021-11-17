import { Component, OnInit } from '@angular/core';
import {CemeteryService} from "../cemetery.service";

@Component({
  selector: 'app-select-cemetery',
  templateUrl: './select-cemetery.component.html',
  styleUrls: ['./select-cemetery.component.scss']
})
export class SelectCemeteryComponent implements OnInit {

  constructor(public cemeteryService: CemeteryService) { }

  async ngOnInit(): Promise<void> {
    await this.cemeteryService.fetchAllCemeteries();
  }

}
