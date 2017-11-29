import { NgModule } from '@angular/core';
import { ValidationFeedbackDirective } from './validation-feedback.directive';

@NgModule({
  declarations: [
    ValidationFeedbackDirective
  ],
  exports: [
    ValidationFeedbackDirective
  ]
})
export class SharedModule {}
