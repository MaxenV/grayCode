import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GrayCodeCounterComponent } from './components/gray-code-counter/gray-code-counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { GrayControlsComponent } from './components/gray-code-counter/gray-controls/gray-controls.component';
import { GrayTableComponent } from './components/gray-code-counter/gray-table/gray-table.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [
      AppComponent,
      HeaderComponent,
      NavigationComponent,
      ShortAboutComponent,
      GrayCodeCounterComponent,
      FooterComponent,
      GrayControlsComponent,
      GrayTableComponent
    ]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
