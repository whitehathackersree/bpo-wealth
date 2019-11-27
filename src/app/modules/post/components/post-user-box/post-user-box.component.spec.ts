import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserBoxComponent } from './post-user-box.component';

describe('PostUserBoxComponent', () => {
  let component: PostUserBoxComponent;
  let fixture: ComponentFixture<PostUserBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostUserBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
