import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Operation } from './operation.model';

@Injectable()
export class ManagerService {

  public operations$: Subject<Operation[]> = new Subject();
}
