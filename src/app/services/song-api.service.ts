import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Song } from 'src/app/classes/song';

@Injectable({
  providedIn: 'root'
})
export class SongAPIService {

  constructor(private http: HttpClient) { }

  public static toSong(json: string): Song { return JSON.parse(json); }

  public static songToJson(value: Song): string { return JSON.stringify(value); }

  private handleError(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) { console.error("An error occurred: ", error.message); } 
    else { console.error(`Backend returned code ${error.status}, body was: ${error.error}`); }

    return throwError("Something bad happened, please, try again later.");

  }

  private extractData(res: Response) {

    let body = res;
    return body || { };

  }

  getData(url: string): Observable<any> {

    return this.http.get(url).pipe(map(this.extractData), catchError(this.handleError));

  }

}