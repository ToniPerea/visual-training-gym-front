import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Deserialize, DeserializeArray, IJsonArray, IJsonObject, Serialize} from "dcerialize";
import {map} from "rxjs/operators";
import {Training} from "../models/training";


@Injectable({
    providedIn: "root"
})

export class TrainingService {
    constructor(private http: HttpClient) {
    }

    add(trainingData: Training): Observable<Training> {
        return this.http.post<IJsonObject>('http://localhost:8080/training', Serialize(trainingData, () => Training)).pipe(
            map(training => Deserialize(training, () => Training))
        )
    }

    getTrainingsList(): Observable<Array<Training>> {
        return this.http.get<IJsonArray>(`http://localhost:8080/getTrainingsList`)
            .pipe(map(trainingsList => DeserializeArray(trainingsList, () => Training)))
    }

    getTrainingsListOneUser(emailClient: string): Observable<Array<Training>> {
        return this.http.get<IJsonArray>(`http://localhost:8080/getTrainingsListOneUser/${emailClient}`)
            .pipe(map(trainingsList => DeserializeArray(trainingsList, () => Training)))
    }

    get(clientEmail: string): Observable<Training> {
        return this.http.get<IJsonObject>(`http://localhost:8080/getTraining/${clientEmail}`)
            .pipe(map(training => Deserialize(training, () => Training)))
    }

    getById(id: string | null | undefined): Observable<Training> {
        return this.http.get<IJsonObject>(`http://localhost:8080/getTrainingByID/${id}`)
            .pipe(map(training => Deserialize(training, () => Training)))
    }


}