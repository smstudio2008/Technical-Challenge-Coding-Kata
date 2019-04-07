import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Converter } from '../app/serviceConverter/converter.service';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Converter]
})
export class AppComponent implements OnInit {
  constructor(private formulas: Converter) {}
  public title = 'Technical Challenge - Coding Kata';
  public InputNumber: number;
  public ResultNumber: any;

  generateNumber() {
    return this.formulas.isOutOfRange(this.InputNumber) === true
      ? (this.ResultNumber = 'Please provide a number between 1 and 3999')
      : (this.ResultNumber = this.formulas.RomanFormula(this.InputNumber));
  }

  alertResult() {
    swal(this.ResultNumber, 'Congrat! Your Number was been Converted ', 'success');
  }

  ngOnInit() {}
}
