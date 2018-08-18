import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFeedComponent } from './info-feed.component';

describe('InfoFeedComponent', () => {
  let component: InfoFeedComponent;
  let fixture: ComponentFixture<InfoFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
