import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyTableComponent } from './grey-table.component';

describe('GreyTableComponent', () => {
  let component: GreyTableComponent;
  let fixture: ComponentFixture<GreyTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreyTableComponent]
    });
    fixture = TestBed.createComponent(GreyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
