export interface FullCemeteryInterface {
  id: number;
  name: string;
  description: string;
  type: number;
  area: AreaInterface[][];
}

export interface AreaInterface {
  fieldEnum: FieldEnum;
  tombstone?: Tombstone;
}

export interface Guest {
  id: number;
  lastName: string;
  deathDate: string;
  birthDate: string;
  firstName: string;
}

export interface Tombstone {
  id: number;
  gridX: number;
  guest: Guest;
  gridY: number;
}

export interface RootObject {
  fieldEnum: string;
  tombstone: Tombstone;
}

export enum FieldEnum {
  tombstone = "TOMBSTONE",
  empty = "EMPTY",
  forbidden = "FORBIDDEN"
}
