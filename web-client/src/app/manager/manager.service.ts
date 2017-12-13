import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagerService {

  private readonly managerBase: string = 'manager';
  public operations$: Subject<Operation[]> = new Subject();

  constructor(private http: HttpClient) {}

  public loadOperations(): void {
    this.http.get<Operation[]>(`${this.managerBase}/operations`)
      .subscribe(operations => this.operations$.next(operations));
  }
}
