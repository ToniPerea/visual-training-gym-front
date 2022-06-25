import {Roles} from "../models/roles";
import {DropDownTuple} from '../interfaces/drop-down-tuple';

/**
 * All roles that can take an user
 */
export const roleList: DropDownTuple[] = [
  {value: Roles.CLIENT, label: 'Client'},
  {value: Roles.TRAINER, label: 'Trainer'}
];