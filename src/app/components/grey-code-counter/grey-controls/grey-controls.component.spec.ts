import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyControlsComponent } from './grey-controls.component';

describe('GreyControlsComponent', () => {
  let component: GreyControlsComponent;
  let fixture: ComponentFixture<GreyControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreyControlsComponent]
    });
    fixture = TestBed.createComponent(GreyControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
