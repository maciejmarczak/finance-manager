import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OperationService {

  private readonly operationsBaseUrl: string = 'manager/operations';
  public operations$: Subject<Operation[]> = new Subject();

  constructor(private http: HttpClient) {}

  public loadOperations(): void {
    this.http.get<Operation[]>(this.operationsBaseUrl)
      .subscribe(operations => this.operations$.next(operations));
  }
}
