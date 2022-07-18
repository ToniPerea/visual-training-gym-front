import { autoserializeAs, autoserializeAsArray } from 'dcerialize';
import { ExerciseComplete } from './exerciseComplete';

export class Training {
  /**
   * ID
   */
  @autoserializeAs(() => String) _id: string | undefined;

  /**
   * All Exercises
   */
  @autoserializeAsArray(() => ExerciseComplete) exercises: ExerciseComplete[];

  //ExerciseCOmplete modelo de VERDAD
  //@autoserializeAsArray(() => ExerciseComplete, 'date_of_training') dateOfTraining: ExerciseComplete[];

  /**
   * Date of the training
   */
  @autoserializeAs(() => Date) date_of_training: Date;

  /**
   * Client email
   */
  @autoserializeAs(() => String) email_client: string;

  /**
   * Trainer Email
   */
  @autoserializeAs(() => String) email_trainer: string;

  constructor(
    exercises: ExerciseComplete[],
    date_of_training: Date,
    email_client: string,
    email_trainer: string,
    _id?: string
  ) {
    this.exercises = exercises;
    this.date_of_training = date_of_training;
    this.email_client = email_client;
    this.email_trainer = email_trainer;
    this._id = _id;
  }
}
