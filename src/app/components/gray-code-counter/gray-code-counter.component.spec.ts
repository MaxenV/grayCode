import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayCodeCounterComponent } from './gray-code-counter.component';
import { GrayTableComponent } from './gray-table/gray-table.component';
import { GrayControlsComponent } from './gray-controls/gray-controls.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GrayCodeCounterComponent', () => {
  let component: GrayCodeCounterComponent;
  let fixture: ComponentFixture<GrayCodeCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GrayCodeCounterComponent,
        GrayControlsComponent,
        GrayTableComponent
      ],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(GrayCodeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
