import { Injectable } from '@angular/core';
import {CemeteryInterface} from "../../interfaces/cemetery.interface";
import {CemeteryForbiddenPositionsInterface} from "../../interfaces/cemetery-forbidden-positions.interface";

@Injectable({
  providedIn: 'root'
})
export class CemeteryService {

  cemeteriesList: CemeteryInterface[] = JSON.parse('[{"id":1,"name":"Cemetery1","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","max_grid_x":6,"max_grid_y":6,"type":1},{"id":2,"name":"Cemetery2","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","max_grid_x":20,"max_grid_y":30,"type":2},{"id":3,"name":"Cemetery3","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","max_grid_x":20,"max_grid_y":30,"type":3},{"id":4,"name":"Cemetery4","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","max_grid_x":20,"max_grid_y":30,"type":4},{"id":5,"name":"Cemetery5","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.","max_grid_x":20,"max_grid_y":30,"type":5}]')
  cemeteryForbiddenPositionsList: CemeteryForbiddenPositionsInterface[] = JSON.parse('[{"id":1,"cementery_id":1,"from_x1":0,"from_y1":0,"from_x2":5,"from_y2":0},{"id":1,"cementery_id":2,"from_x1":2,"from_y1":0,"from_x2":2,"from_y2":5}]');
  constructor() { }
}
