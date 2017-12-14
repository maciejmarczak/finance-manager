import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OperationService {

  private readonly operationsBaseUrl: string = 'manager/operations';
  public operations$: Subject<Operation[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {}

  public loadOperations(): void {
    // reset currently stored data (useful on user logout)
    this.operations$.next([]);

    // and fetch a new one
    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(operations => this.operations$.next(operations));
  }
}
