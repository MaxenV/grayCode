import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GreyCodeCounterComponent } from './components/grey-code-counter/grey-code-counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { GreyControlsComponent } from './components/grey-code-counter/grey-controls/grey-controls.component';
import { GreyTableComponent } from './components/grey-code-counter/grey-table/grey-table.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      HeaderComponent,
      NavigationComponent,
      ShortAboutComponent,
      GreyCodeCounterComponent,
      FooterComponent,
      GreyControlsComponent,
      GreyTableComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
