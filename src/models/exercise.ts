import { autoserializeAs } from 'dcerialize';

export class Exercise {
  /**
   * User name
   */
  @autoserializeAs(() => String) name: string;

  /**
   * User age
   */
  @autoserializeAs(() => String) gif: string;

  constructor(name: string, gif: string) {
    this.name = name;
    this.gif = gif;
  }
}
