import { Coordinates } from "./ICoordinates";
import { Street } from "./IStreet";
import { Timezone } from "./ITimeZone";

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number | string;
  coordinates: Coordinates;
  timezone: Timezone;
}
