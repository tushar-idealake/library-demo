import { InjectionToken } from "@angular/core";

export interface FormGenericSpinnerConfig {
  type?: string;
}

export const GENERIC_SPINNER_CONFIG = new InjectionToken<FormGenericSpinnerConfig>(
  "GENERIC_SPINNER_CONFIG"
);
