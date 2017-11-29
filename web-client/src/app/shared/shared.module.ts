import { NgModule } from '@angular/core';
import { ValidationFeedbackDirective } from './validation-feedback.directive';
import { ValidationMarkDirective } from './validation-mark.directive';

@NgModule({
  declarations: [
    ValidationFeedbackDirective,
    ValidationMarkDirective
  ],
  exports: [
    ValidationFeedbackDirective,
    ValidationMarkDirective
  ]
})
export class SharedModule {}
