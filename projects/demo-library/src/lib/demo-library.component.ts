import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Self,
  Optional,
  forwardRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  Validator,
  AbstractControl,
  ValidatorFn,
  Validators,
  NG_VALIDATORS,
  NgControl,
  NgForm,
} from '@angular/forms';

@Component({
  selector: 'lib-demo-library',
  templateUrl: './demo-library.component.html',
  styleUrls: ['./demo-library.component.scss'],
})
export class DemoLibraryComponent
  implements ControlValueAccessor, Validator, OnInit
{
  @ViewChild('input') input!: ElementRef;
  disabled: any;

  @Input() type = 'text';
  @Input() isRequired: boolean = false;
  @Input() pattern: string = '';
  @Input() label: string = '';
  @Input() placeholder!: string;
  @Input() errorMsg!: string;

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit() {
    const control = this.controlDir.control;
    const validators: ValidatorFn[] = control?.validator
      ? [control.validator]
      : [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    control?.setValidators(validators);
    control?.updateValueAndValidity();
  }

  onChange(e: any) {
    console.log(e.target.value);
  }

  onTouched() {}

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(c: AbstractControl): { [key: string]: any } {
    const validators: ValidatorFn[] = [];
    if (this.isRequired) {
      validators.push(Validators.required);
    }
    if (this.pattern) {
      validators.push(Validators.pattern(this.pattern));
    }

    console.log(validators);
    

    return validators;
  }
}
