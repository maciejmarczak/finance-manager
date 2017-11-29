import { Attribute, Directive, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[fmValidationMark]'
})
export class ValidationMarkDirective implements OnInit {

  constructor(@Attribute('fmValidationMark') mode: string,
              private ngControl: NgControl) {}

  ngOnInit() {
    this.ngControl.statusChanges.subscribe(
      next => console.log(next)
    );
  }
}
