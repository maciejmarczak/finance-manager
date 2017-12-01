import { NgModule } from '@angular/core';
import { ValidationFeedbackDirective } from './validation-feedback.directive';
import { ValidationStatusDirective } from './validation-status.directive';

@NgModule({
  declarations: [
    ValidationFeedbackDirective,
    ValidationStatusDirective
  ],
  exports: [
    ValidationFeedbackDirective,
    ValidationStatusDirective
  ]
})
export class SharedModule {}
