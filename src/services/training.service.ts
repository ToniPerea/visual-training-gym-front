import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Deserialize, DeserializeArray, IJsonArray, IJsonObject, Serialize } from 'dcerialize';
import { map } from 'rxjs/operators';
import { Training } from '../models/training';
import { CustomSnackbarService } from './custom-snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  constructor(private http: HttpClient, private snackbarService: CustomSnackbarService) {}

  add(trainingData: Training): Observable<Training> {
    return this.http
      .post<IJsonObject>(
        // 'http://localhost:8080/training',
        'http://vtgym.sytes.net:8080/training',
        Serialize(trainingData, () => Training)
      )
      .pipe(
        map((training) => Deserialize(training, () => Training)),
        catchError((err: HttpErrorResponse) => this.snackbarService.showError(err))
      );
  }

  getTrainingsList(): Observable<Array<Training>> {
    return (
      this.http
        //   .get<IJsonArray>(`http://localhost:8080/getTrainingsList`)
        .get<IJsonArray>(`http://vtgym.sytes.net:8080/getTrainingsList`)
        .pipe(map((trainingsList) => DeserializeArray(trainingsList, () => Training)))
    );
  }

  getTrainingsListOneUser(emailClient: string): Observable<Array<Training>> {
    return (
      this.http
        //   .get<IJsonArray>(`http://localhost:8080/getTrainingsListOneUser/${emailClient}`)
        .get<IJsonArray>(`http://vtgym.sytes.net:8080/getTrainingsListOneUser/${emailClient}`)
        .pipe(map((trainingsList) => DeserializeArray(trainingsList, () => Training)))
    );
  }

  get(clientEmail: string): Observable<Training> {
    return (
      this.http
        //   .get<IJsonObject>(`http://localhost:8080/getTraining/${clientEmail}`)
        .get<IJsonObject>(`http://vtgym.sytes.net:8080/getTraining/${clientEmail}`)
        .pipe(map((training) => Deserialize(training, () => Training)))
    );
  }

  getById(id: string | null | undefined): Observable<Training> {
    return (
      this.http
        //   .get<IJsonObject>(`http://localhost:8080/getTrainingByID/${id}`)
        .get<IJsonObject>(`http://vtgym.sytes.net:8080/getTrainingByID/${id}`)
        .pipe(map((training) => Deserialize(training, () => Training)))
    );
  }
}
