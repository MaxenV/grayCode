import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreyCodeCounterComponent } from './grey-code-counter.component';
import { GreyTableComponent } from './grey-table/grey-table.component';
import { GreyControlsComponent } from './grey-controls/grey-controls.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('GreyCodeCounterComponent', () => {
  let component: GreyCodeCounterComponent;
  let fixture: ComponentFixture<GreyCodeCounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GreyCodeCounterComponent,
        GreyControlsComponent,
        GreyTableComponent
      ],
      imports: [ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(GreyCodeCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
