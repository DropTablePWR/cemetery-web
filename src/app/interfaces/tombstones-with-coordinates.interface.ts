import {GuestInterface} from "./guest.interface";

export interface TombstonesWithCoordinatesInterface {
  id?: number ;
  x: number | string;
  y: number | string;
  t: string | null;
  guest? : GuestInterface;
}
