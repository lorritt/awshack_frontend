import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeNavComponent } from './challenge-nav.component';

describe('ChallengeNavComponent', () => {
  let component: ChallengeNavComponent;
  let fixture: ComponentFixture<ChallengeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
