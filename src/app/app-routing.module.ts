import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  {
    path: "",
    component: TestComponent
  },
  {
    path: "marketing-manager",
    loadChildren: ()=>import("./modules/marketing-manager/marketing-manager.module").then(m=>m.MarketingManagerModule),
  }
  // { path: "", redirectTo: "/heroes", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
