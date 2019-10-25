import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivedetailComponent } from './activedetail.component';

describe('ActivedetailComponent', () => {
  let component: ActivedetailComponent;
  let fixture: ComponentFixture<ActivedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
