import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormGroup } from '@angular/forms';

@Directive({
  selector: '[fmValidationFeedback]',
  host: {
    'class': 'invalid-feedback',
    '[class.d-none]': 'isValid'
  }
})
export class ValidationFeedbackDirective implements OnInit {

  @Input('fmValidationFeedback') controlName: string;
  @Input() error: string;

  isValid: boolean;

  private control: AbstractControl;

  constructor(private container: ControlContainer) {}

  ngOnInit() {
    this.initControl();
    this.listenForErrors();
  }

  private initControl(): void {
    const form: FormGroup = this.container.formDirective['form'];

    if ( (this.control = form.get(this.controlName)) == null ) {
      throw new Error(`Couldn't fetch control ${this.controlName}.`);
    }
  }

  private listenForErrors(): void {
    this.control.statusChanges.subscribe(
      () => this.isValid = !this.control.getError(this.error)
    );
  }
}
