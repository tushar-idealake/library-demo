import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'form-generic-toggle',
  templateUrl: './form-generic-toggle.component.html',
  styleUrls: ['./form-generic-toggle.component.scss']
})
export class FormGenericToggleComponent implements ControlValueAccessor, OnInit {

  @Input() label: string = '';
  @Input() name: string = '';
  @Input() id: string = '';
  @Input() isRequired: boolean = false;
  // @ViewChild('input') input!: ElementRef;


  constructor(@Self() public controlDir: NgControl) {
   if(controlDir) this.controlDir.valueAccessor = this;
  }


  ngOnInit(): void {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator
    ? [control.validator]
    : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    control?.setValidators(validators);
    control?.setValue(false, { emitEvent: false });
    control?.updateValueAndValidity();
  }


  public regOnChange = (_: any) => {};

  public regOnTouched = (_: any) => {};

  registerOnChange(fn: any): void {
    // console.log('registerOnChange', fn);
    this.regOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    // console.log('registerOnTouched', fn);
    this.regOnTouched = fn;
  }

  writeValue(value: any) {
    // console.log('writeValue', value);
  }

  onChanged(value: any) {
    console.log('executed!!');
    
    this.regOnChange(value);
  }

}
