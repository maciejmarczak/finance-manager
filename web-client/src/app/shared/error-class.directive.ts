import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[fmErrorClass][ngModel]',
  providers: [
    NgModel
  ]
})
export class ErrorClassDirective {

  @Input('fmErrorClass') errorClass: string;

  constructor(private el: ElementRef, private renderer: Renderer2, private ngModel: NgModel) {}

  @HostListener('blur') onInputBlur(): void {
    const nativeEl = this.el.nativeElement;

    if (this.shouldMarkError()) {
      this.renderer.addClass(nativeEl, this.errorClass);
    } else {
      this.renderer.removeClass(nativeEl, this.errorClass);
    }
  }

  private shouldMarkError(): boolean {
    return this.ngModel.invalid && (this.ngModel.dirty || this.ngModel.touched);
  }
}
