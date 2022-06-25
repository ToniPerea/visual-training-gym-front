import {
  autoserializeAs,
} from 'dcerialize';


export class User {
    /**
   * User name
   */
  @autoserializeAs(() => String) name: string;

  /**
   * User age
   */
  @autoserializeAs(() => String) age: Date;

    /**
   * User email
   */
  @autoserializeAs(() => String) email: string | null;

  /**
   * User password
   */
  @autoserializeAs(() => String) password: string | null;

    /**
   * User role
   */
  @autoserializeAs(() => String) role: string;

  /**
   * User status
   */
  @autoserializeAs(() => String) status: string;


  constructor(
      name:string,
      age: Date,
      email: string | null,
      password: string | null,
      role: string,
      status: string
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.role = role;
    this.status = status;
  }



}