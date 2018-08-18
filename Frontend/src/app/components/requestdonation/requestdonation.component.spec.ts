import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestdonationComponent } from './requestdonation.component';

describe('RequestdonationComponent', () => {
  let component: RequestdonationComponent;
  let fixture: ComponentFixture<RequestdonationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestdonationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestdonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
