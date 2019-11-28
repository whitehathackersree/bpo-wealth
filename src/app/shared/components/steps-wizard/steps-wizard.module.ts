import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsWizardComponent } from './steps-wizard.component';
import { StepsWizardItemComponent } from './steps-wizard-item/steps-wizard-item.component';

import { SharedModule } from './../../shared.module';

@NgModule({
  declarations: [
    StepsWizardComponent,
    StepsWizardItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StepsWizardComponent,
    StepsWizardItemComponent
  ]
})
export class StepsWizardModule { }
