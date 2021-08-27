import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HardwareDetailComponent } from './components/hardware-detail.component';

describe('HardwareDetailComponent', () => {
  let component: HardwareDetailComponent;
  let fixture: ComponentFixture<HardwareDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HardwareDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
