import { Attribute, Directive, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[fmValidationStatus]'
})
export class ValidationStatusDirective implements OnInit {

  constructor(@Attribute('fmValidationStatus') flags: string,
              private ngControl: NgControl) {}

  ngOnInit() {
    this.ngControl.statusChanges.subscribe(
      next => console.log(next)
    );
  }
}
