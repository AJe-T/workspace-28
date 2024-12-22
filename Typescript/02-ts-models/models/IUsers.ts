import { DobOrRegistered } from "./IDobOrRegistered";
import { Id } from "./IId";
import { Login } from "./ILogin";
import { Name } from "./IName";
import { Picture } from "./IPicture";
import { Location } from "./ILocation";

export interface IUser {
  gender: string;
  name: Name;
  location: Location;
  email?: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}








