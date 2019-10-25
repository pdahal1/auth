import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiverouteComponent } from './activeroute.component';

describe('ActiverouteComponent', () => {
  let component: ActiverouteComponent;
  let fixture: ComponentFixture<ActiverouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiverouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiverouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
