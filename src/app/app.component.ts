import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wealth';
  nav_items:Array<any> = [];
  nav_items=[
      {
        name: "Home",
        alias: "home",
        link: "/home/",
        active: true,
        if_authenticated: true,
      },
      {
        name: "Dashboard",
        alias: "dashboard",
        link: "/dashboard/",
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
}
