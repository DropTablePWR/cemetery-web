import {Injectable} from '@angular/core';
import {AllCemeteriesInterface} from "../../interfaces/all-cemeteries.interface";
import {HttpClient} from "@angular/common/http";
import {FullCemeteryInterface} from "../../interfaces/full-cemetery.interface";

@Injectable({
  providedIn: 'root'
})
export class CemeteryService {

  allCemeteries: AllCemeteriesInterface[] = [];
  fullCemetery!: FullCemeteryInterface;

  constructor(
    private http: HttpClient,
  ) { }

  async fetchAllCemeteries(){
   this.allCemeteries = await this.http.get<AllCemeteriesInterface[]>('http://localhost:8000/api/cemetery').toPromise();
  }

  async fetchFullCemetery(id: number){
    this.fullCemetery = await this.http.get<FullCemeteryInterface>(`http://localhost:8000/api/cemetery/${id}/all`).toPromise();
  }
}
