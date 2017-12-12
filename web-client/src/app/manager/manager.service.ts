import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ManagerService {

  public operations$: Subject<Operation[]> = new Subject();

  constructor(private http: HttpClient) {}
}
