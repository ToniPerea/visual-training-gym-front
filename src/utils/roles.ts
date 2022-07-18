import { Roles } from '../models/roles';
import { DropDownTuple } from '../interfaces/drop-down-tuple';

/**
 * All roles that can take an user
 */
export const roleList: DropDownTuple[] = [
  { value: Roles.CLIENT, label: 'Cliente' },
  { value: Roles.TRAINER, label: 'Entrenador' }
];
