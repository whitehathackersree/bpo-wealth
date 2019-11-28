import { Component } from '@angular/core';

@Component({
  selector: 'app-marketing-manager',
  templateUrl: './marketing-manager.component.html',
  styleUrls: ['./marketing-manager.component.scss']
})
export class MarketingManagerComponent {

  nav_items:Array<any> = [
      {
        name: "Home",
        alias: "home",
        link: "/home/",
        active: true,
        if_authenticated: true,
      },
      {
        name: "Steps",
        alias: "steps",
        link: "/marketing-manager/steps/",
        if_authenticated: true,
      },
      {
        name: "Campaigns",
        alias: "campaigns",
        link: "/campaigns/",
        if_authenticated: true,
      },
      {
        name: "Sales Cycles",
        alias: "sales-cycles",
        link: "/sales-cycles/",
        if_authenticated: true,
      },
      {
        name: "Users",
        alias: "users",
        link: "/users/",
        if_authenticated: true,
      },
    ];

    nav_options = {
      background: "white",
    }

  constructor() {
      console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbb");
  }

}
