import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadableButtonComponent } from './components/loadable-button/loadable-button.component';
import { WmManagerStepsComponent } from './components/wm-manager-steps/wm-manager-steps.component';

@NgModule({
  declarations: [LoadableButtonComponent, WmManagerStepsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoadableButtonComponent,
    WmManagerStepsComponent,
  ]
})
export class SharedModule { }
