import {
  autoserializeAs,
} from 'dcerialize';


export class User {
    /**
   * User email
   */
  @autoserializeAs(() => String) email: string | null;

  /**
   * User password
   */
  @autoserializeAs(() => String) password: string | null;


  constructor(
      email: string | null,
      password: string | null
  ) {
    this.email = email;
    this.password = password;
  }
}