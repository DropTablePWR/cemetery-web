import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NewTombstone} from "../../interfaces/new-tombstone";

@Injectable({
  providedIn: 'root'
})
export class TombstoneService {

  constructor(
    private http: HttpClient,
  ) { }

  createNewTombstone(cemeteryId: number, tombstone: NewTombstone){
    this.http.post<NewTombstone>(`http://localhost:8000/api/cemetery/${cemeteryId}/tombstone`, tombstone).subscribe();
  }
}
