import { Attribute, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[fmValidationStatus]'
})
export class ValidationStatusDirective implements OnInit {

  private config;
  private nativeEl;
  private statusChanges$;

  constructor(@Attribute('fmValidationStatus') confStr: string,
              el: ElementRef,
              ngControl: NgControl,
              private renderer: Renderer2) {
    this.config = Config.fromString(confStr);
    this.nativeEl = el.nativeElement;
    this.statusChanges$ = ngControl.statusChanges;
  }

  ngOnInit() {
    this.statusChanges$.subscribe(
      status => this.updateElClasses(status)
    );
  }

  private updateElClasses(status: string): void {
    this.removeStatusClasses();
    this.setStatusClass(status);
  }

  private removeStatusClasses(): void {
    this.config.allClasses.forEach(
      cssClass => this.renderer.removeClass(
        this.nativeEl, cssClass)
    );
  }

  private setStatusClass(status: string): void {
    const statusConfig = this.config[status];

    if (statusConfig && statusConfig.enabled) {
      this.renderer.addClass(this.nativeEl,
        statusConfig.cssClass);
    }
  }
}

class Config {
  private static baseConfig = {
    INVALID: {
      cssClass: 'is-invalid',
      enabled: true
    },
    PENDING: {
      cssClass: 'is-pending',
      enabled: false
    },
    VALID  : {
      cssClass: 'is-valid',
      enabled: false
    },
    allClasses: ['is-invalid', 'is-pending', 'is-valid']
  };

  static fromString(confStr: string) {
    // deep copy
    const config = JSON.parse(JSON.stringify(Config.baseConfig));

    config.INVALID.enabled = confStr.includes('i');
    config.PENDING.enabled = confStr.includes('p');
    config.VALID.enabled   = confStr.includes('v');

    return config;
  };
}
