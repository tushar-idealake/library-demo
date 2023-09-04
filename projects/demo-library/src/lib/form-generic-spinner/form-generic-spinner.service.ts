import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";
import { FormGenericSpinner, Spinner, PRIMARY_SPINNER } from "./form-generic-spinner.enum";

@Injectable({
  providedIn: "root",
})
export class FormGenericSpinnerService {
  /**
   * Spinner observable
   *
   * @memberof FormGenericSpinnerService
   */
  // private spinnerObservable = new ReplaySubject<FormGenericSpinner>(1);
  public spinnerObservable = new BehaviorSubject<FormGenericSpinner | null>(null);
  /**
   * Creates an instance of FormGenericSpinnerService.
   * @memberof FormGenericSpinnerService
   */
  constructor() {}
  /**
   * Get subscription of desired spinner
   * @memberof FormGenericSpinnerService
   **/
  getSpinner(name: string): Observable<FormGenericSpinner> {
    return this.spinnerObservable
      .asObservable()
      .pipe(filter((x: FormGenericSpinner | any) => x && x.name === name));
  }
  /**
   * To show spinner
   *
   * @memberof FormGenericSpinnerService
   */
  show(name: string = PRIMARY_SPINNER, spinner?: Spinner | any) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (spinner && Object.keys(spinner).length) {
          spinner["name"] = name;
          this.spinnerObservable.next(
            new FormGenericSpinner({ ...spinner, show: true })
          );
          resolve(true);
        } else {
          this.spinnerObservable.next(new FormGenericSpinner({ name, show: true }));
          resolve(true);
        }
      }, 10);
    });
  }
  /**
   * To hide spinner
   *
   * @memberof FormGenericSpinnerService
   */
  hide(name: string = PRIMARY_SPINNER, debounce: number = 10) {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        this.spinnerObservable.next(new FormGenericSpinner({ name, show: false }));
        resolve(true);
      }, debounce);
    });
  }
}
