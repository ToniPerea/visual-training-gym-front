import {autoserializeAs, autoserializeAsArray} from "dcerialize";
import {ExerciseComplete} from "./exerciseComplete";


export class Training {
    /**
     * All Exercises
     */
    @autoserializeAsArray(() => ExerciseComplete) exercises: ExerciseComplete[];

    //ExerciseCOmplete modelo de VERDAD
    //@autoserializeAsArray(() => ExerciseComplete, 'date_of_training') dateOfTraining: ExerciseComplete[];

    /**
     * Date of the training
     */
    @autoserializeAs(() => String) date_of_training: string;

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
        date_of_training: string,
        email_client: string,
        email_trainer: string
    ) {
        this.exercises = exercises;
        this.date_of_training = date_of_training;
        this.email_client = email_client;
        this.email_trainer = email_trainer;
    }


}