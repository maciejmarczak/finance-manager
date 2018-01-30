import * as moment from 'moment';

import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WalletService } from '../wallet.service';
import { Operation } from '../operation.model';

@Component({
  selector: 'fm-add-operation',
  template: `
    <div class="modal-header">
      <h5 class="modal-title">New Operation</h5>
      <button type="button" class="close" (click)="bsModalRef.hide()">
        <span>&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form [formGroup]="myForm" (submit)="addOperation()">
        <div class="form-row">
          <div class="form-group col-sm-6">
            <label for="date">Date</label>
            <input bsDatepicker
                   [bsConfig]="bsConfig"
                   type="text"
                   formControlName="date"
                   class="form-control"
                   fmValidationStatus="i"
                   id="date">
          </div>
          <div class="form-group col-sm-6">
            <label for="category">Category</label>
            <input type="text"
                   formControlName="category"
                   [typeahead]="categories"
                   [typeaheadOptionsLimit]="5"
                   [typeaheadMinLength]="1"
                   class="form-control"
                   autocomplete="off"
                   fmValidationStatus="i"
                   id="category">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-sm-6">
            <label for="value">Value</label>
            <input type="number"
                   formControlName="value"
                   class="form-control"
                   fmValidationStatus="i"
                   id="value">
          </div>
          <div class="form-group col-sm-6">
            <label for="currency">Currency</label>
            <input type="text"
                   formControlName="currency"
                   [typeahead]="currencies"
                   [typeaheadOptionsLimit]="5"
                   [typeaheadMinLength]="1"
                   class="form-control"
                   autocomplete="off"
                   fmValidationStatus="i"
                   id="currency">
          </div>
        </div>
        <button type="submit" class="d-none"></button>
      </form>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary"
              [disabled]="!myForm.valid" (click)="addOperation()">Add
      </button>
      <button type="button" class="btn btn-secondary"
              (click)="bsModalRef.hide()">Close
      </button>
    </div>
  `
})
export class AddOperationComponent implements OnInit {

  myForm: FormGroup;

  categories: string[] = [];
  currencies: string[] = [];

  bsConfig = {
    dateInputFormat: 'YYYY-MM-DD',
    containerClass: 'theme-dark-blue'
  };

  constructor(public bsModalRef: BsModalRef,
              private fb: FormBuilder,
              private walletService: WalletService) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      date: [new Date().toISOString(), Validators.required],
      value: [0, Validators.required],
      currency: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  addOperation(): void {
    if (this.myForm.valid) {
      const operation: Operation = this.myForm.value;
      operation.date = moment(operation.date).toDate();

      this.walletService.addOperation(operation);
      this.bsModalRef.hide();
    }
  }
}
