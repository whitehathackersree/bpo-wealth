import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WmManagerStepsComponent } from './wm-manager-steps.component';

describe('WmManagerStepsComponent', () => {
  let component: WmManagerStepsComponent;
  let fixture: ComponentFixture<WmManagerStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WmManagerStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WmManagerStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
