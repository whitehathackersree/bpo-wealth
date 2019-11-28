import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ViewEncapsulation,
} from '@angular/core';

import { StepsWizardItemComponent } from './steps-wizard-item/steps-wizard-item.component';

@Component({
  selector: 'steps-wizard',
  templateUrl: './steps-wizard.component.html',
  styleUrls: ['./steps-wizard.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class StepsWizardComponent implements AfterContentInit {
  @ContentChildren(StepsWizardItemComponent) steps: QueryList<StepsWizardItemComponent>;
  constructor() { }
  selectedStep;
  //after content children are set
  ngAfterContentInit(){
    //get all selected steps
    let selectedSteps = this.steps.filter((step)=>step.selected);

    //if there is/are selected step(s) select the first selected step.
    //otherwise select the fist step
    if(selectedSteps.length>0){
      this.selectedStep = selectedSteps[0];
    }else{
      this.selectedStep = this.steps[0];
    }
  }

  selectStep(step){
    this.steps.forEach(step => step.selected=false);
    step.selected = true;
  }

}
