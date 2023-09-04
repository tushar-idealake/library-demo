import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGenericSpinnerComponent } from './form-generic-spinner.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { FormGenericSpinnerConfig, GENERIC_SPINNER_CONFIG } from './config';

@NgModule({
  imports: [CommonModule],
  declarations: [FormGenericSpinnerComponent, SafeHtmlPipe],
  exports: [FormGenericSpinnerComponent],
})
export class FormGenericSpinnerModule {
  static forRoot(
    config?: FormGenericSpinnerConfig
  ): ModuleWithProviders<FormGenericSpinnerModule> {
    return {
      ngModule: FormGenericSpinnerModule,
      providers: [{ provide: GENERIC_SPINNER_CONFIG, useValue: config }],
    };
  }
}
