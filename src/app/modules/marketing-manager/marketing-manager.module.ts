import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingManagerRoutingModule } from './marketing-manager-routing.module';
import { StepsWizardModule } from "./../../shared/components/steps-wizard/steps-wizard.module";
import { StepsComponent } from './pages/steps/steps.component';



@NgModule({
  declarations: [StepsComponent],
  imports: [
    CommonModule,
    MarketingManagerRoutingModule,
    StepsWizardModule,
  ]
})
export class MarketingManagerModule { }
