import { Injectable } from '@angular/core';
import {TombstoneInterface} from "../../interfaces/tombstone.interface";
import {GuestInterface} from "../../interfaces/guest.interface";

@Injectable({
  providedIn: 'root'
})
export class TombstoneService {

  tombstonesList: TombstoneInterface[] = JSON.parse('[{"id":1,"cemetery_id":1,"grid_x":1,"grid_y":0},{"id":2,"cemetery_id":1,"grid_x":2,"grid_y":0},{"id":3,"cemetery_id":1,"grid_x":5,"grid_y":5},{"id":4,"cemetery_id":1,"grid_x":3,"grid_y":0},{"id":5,"cemetery_id":1,"grid_x":4,"grid_y":0},{"id":6,"cemetery_id":1,"grid_x":5,"grid_y":4},{"id":7,"cemetery_id":1,"grid_x":1,"grid_y":1},{"id":8,"cemetery_id":1,"grid_x":2,"grid_y":1},{"id":9,"cemetery_id":1,"grid_x":3,"grid_y":1},{"id":10,"cemetery_id":1,"grid_x":4,"grid_y":1}]');
  guestList: GuestInterface[] = JSON.parse('[{"id":1,"tombstone_id":1,"first_name":"arnold","last_name":"boczek","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":2,"tombstone_id":2,"first_name":"marian","last_name":"paździoch","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":3,"tombstone_id":3,"first_name":"ferdynand","last_name":"kiepski","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":4,"tombstone_id":4,"first_name":"babka","last_name":"kiepska","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":5,"tombstone_id":5,"first_name":"halina","last_name":"kiepska","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":6,"tombstone_id":6,"first_name":"helena","last_name":"paździoch","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":7,"tombstone_id":7,"first_name":"edzio","last_name":"listonosz","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":8,"tombstone_id":8,"first_name":"waldemar","last_name":"kiepski","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":9,"tombstone_id":9,"first_name":"mariola","last_name":"kiepska","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"},{"id":10,"tombstone_id":10,"first_name":"jolanta","last_name":"kopeć","birth_date":"1970-01-01 00:00:01.000000","death_date":"2020-01-01 00:00:01.000000"}]')

  constructor() { }
}
