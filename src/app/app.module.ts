import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { GreyCodeCounterComponent } from './components/grey-code-counter/grey-code-counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreyControlsComponent } from './components/grey-code-counter/grey-controls/grey-controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GreyTableComponent } from './components/grey-code-counter/grey-table/grey-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShortAboutComponent,
    GreyCodeCounterComponent,
    FooterComponent,
    GreyControlsComponent,
    GreyTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
