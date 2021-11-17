export class NewGuest {
  firstName: string = '';
  lastName: string = '';
  birthDate: string | null = null;
  deathDate: string | null = null;
}

export class NewTombstone {
  gridX: number | undefined = undefined;
  gridY: number | undefined = undefined;
  guest: NewGuest = new NewGuest()
}
