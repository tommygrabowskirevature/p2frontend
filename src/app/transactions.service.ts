import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Transactions } from './transactions';

import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private baseUrl = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  private log(message: string) {
    console.log(`TransactionsService: ${message}`);
  }

  getTransactions(): Observable<Transactions[]> {
    return this.http.get<Transactions[]>(this.baseUrl + '/transactions').pipe(
      tap((_) => this.log('fetched transactionss')),
      catchError(this.handleError<Transactions[]>('getTransactions', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
