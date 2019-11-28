import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsWizardItemComponent } from './steps-wizard-item.component';

describe('StepsWizardItemComponent', () => {
  let component: StepsWizardItemComponent;
  let fixture: ComponentFixture<StepsWizardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsWizardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsWizardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
