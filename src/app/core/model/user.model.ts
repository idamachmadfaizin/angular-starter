import { Role } from '@app/shared/enum/role.enum';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  role: Role;
  token?: string;
}
