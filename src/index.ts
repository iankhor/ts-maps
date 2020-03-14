import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

const user = new User();
const company = new Company();

const map = new CustomMap('map');

map.addUserMarker(user);
map.addCompanyMarker(company);
