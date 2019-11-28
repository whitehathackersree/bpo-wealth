import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingManagerRoutingModule } from './marketing-manager-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { StepsWizardModule } from "./../../shared/components/steps-wizard/steps-wizard.module";
import { StepsComponent } from './pages/steps/steps.component';
import { MarketingManagerComponent } from './marketing-manager.component';



@NgModule({
  declarations: [
    MarketingManagerComponent,
    StepsComponent
  ],
  imports: [
    CommonModule,
    MarketingManagerRoutingModule,
    SharedModule,
    StepsWizardModule,
  ],
  bootstrap: [MarketingManagerComponent]
})
export class MarketingManagerModule { }
