import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'loadable-button',
  templateUrl: './loadable-button.component.html',
  styleUrls: ['./loadable-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoadableButtonComponent implements OnInit {

  @Input() type;
  @Input() loaderColor;
  @Input() value;
  @Input() disabled;
  @Input() submitting;

  loaders = {
    "blue": "/assets/images/loaders/rolling-blue.svg",
    "grey": "/assets/images/loaders/rolling-grey.svg",
    "orange": "/assets/images/loaders/rolling-ornage.svg",
    "white": "/assets/images/loaders/rolling-white.svg",
  }

  constructor() { }

  ngOnInit() {
    if(this.type==undefined)this.type="button";
    if(this.loaderColor==undefined)this.loaderColor="grey";
    if(this.value==undefined)this.value="please pass value";
    if(this.disabled==undefined)this.disabled=false;
    if(this.submitting==undefined)this.submitting=false;
  }

}
