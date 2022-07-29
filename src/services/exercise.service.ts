import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Exercise } from '../models/exercise';
import {catchError, Observable} from 'rxjs';
import { Deserialize, DeserializeArray, IJsonArray, IJsonObject, Serialize } from 'dcerialize';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import {CustomSnackbarService} from './custom-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {
  constructor(private http: HttpClient, private snackbarService: CustomSnackbarService) {}

  add(exerciseData: Exercise): Observable<Exercise> {
    return this.http
      .post<IJsonObject>(
        'http://localhost:8080/exercise',
        Serialize(exerciseData, () => Exercise)
      )
      .pipe(map((exercise) => Deserialize(exercise, () => Exercise)),
          catchError((err: HttpErrorResponse) => this.snackbarService.showError(err)));
  }

  get(exerciseID: string): Observable<Exercise> {
    return this.http
      .get<IJsonObject>(`http://localhost:8080/getTraining/${exerciseID}`)
      .pipe(map((exercise) => Deserialize(exercise, () => Exercise)));
  }

  getExercisesList(): Observable<Array<Exercise>> {
    return this.http
      .get<IJsonArray>(`http://localhost:8080/getExercisesList`)
      .pipe(map((exercise) => DeserializeArray(exercise, () => Exercise)));
  }

  put(exerciseData: Exercise): Observable<Exercise> {
    return this.http
      .put<IJsonObject>(
        'http://localhost:8080/updateExercise',
        Serialize(exerciseData, () => Exercise)
      )
      .pipe(map((exercise) => Deserialize(exercise, () => Exercise)));
  }

  delete(exerciseID: string): Observable<null> {
    return this.http.delete<null>(`http://localhost:8080/deleteExercise/${exerciseID}`);
  }
}
