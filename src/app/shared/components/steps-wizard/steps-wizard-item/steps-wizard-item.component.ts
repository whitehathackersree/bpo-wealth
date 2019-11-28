import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'steps-wizard-item',
  templateUrl: './steps-wizard-item.component.html',
  styleUrls: ['./steps-wizard-item.component.scss']
})
export class StepsWizardItemComponent implements OnInit {

  @Output() addStep = new EventEmitter<any>();
  @Input() name;
  @Input() selected;
  constructor() { }

  ngOnInit() {
    if (this.selected==undefined){
      this.selected=false
    }
    this.addStep.emit(name);
  }

}
