import { User } from "./User"
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
/// <reference types="@types/google.maps" />

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
 
customMap.addMarker(user)
customMap.addMarker(company)
 