import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StepsComponent } from './pages/steps/steps.component';
import { MarketingManagerComponent } from './marketing-manager.component';

const routes: Routes = [
  {
    path: "",
    component: MarketingManagerComponent,
    children: [
      {
        path: "steps",
        component: StepsComponent,
      },
      {
        path: "steps_two",
        component: StepsComponent,
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MarketingManagerRoutingModule { }
