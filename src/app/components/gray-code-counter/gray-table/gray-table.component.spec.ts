import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayTableComponent } from './gray-table.component';

describe('GrayTableComponent', () => {
  let component: GrayTableComponent;
  let fixture: ComponentFixture<GrayTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrayTableComponent]
    });
    fixture = TestBed.createComponent(GrayTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
