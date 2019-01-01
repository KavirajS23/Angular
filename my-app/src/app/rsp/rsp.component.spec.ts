import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RspComponent } from './rsp.component';

describe('RspComponent', () => {
  let component: RspComponent;
  let fixture: ComponentFixture<RspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
