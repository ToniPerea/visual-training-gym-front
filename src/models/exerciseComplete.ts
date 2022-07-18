import { Exercise } from './exercise';
import { autoserializeAs } from 'dcerialize';

export class ExerciseComplete {
  /**
   * An Exercise
   */
  @autoserializeAs(() => Exercise) exercise: Exercise;

  /**
   * Weight
   */
  @autoserializeAs(() => String) weight: string;

  /**
   * Series
   */
  @autoserializeAs(() => String) series: number;

  /**
   * Repetitions
   */
  @autoserializeAs(() => String) repetitions: number;

  constructor(exercise: Exercise, weight: string, series: number, repetitions: number) {
    this.exercise = exercise;
    this.weight = weight;
    this.series = series;
    this.repetitions = repetitions;
  }
}
