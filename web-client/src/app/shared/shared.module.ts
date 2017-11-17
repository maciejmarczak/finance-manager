import { NgModule } from '@angular/core';
import { ErrorClassDirective } from './error-class.directive';

@NgModule({
  declarations: [
    ErrorClassDirective
  ],
  exports: [
    ErrorClassDirective
  ]
})
export class SharedModule {}
