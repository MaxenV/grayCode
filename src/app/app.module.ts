import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { GrayCodeCounterComponent } from './components/gray-code-counter/gray-code-counter.component';
import { FooterComponent } from './components/footer/footer.component';
import { GrayControlsComponent } from './components/gray-code-counter/gray-controls/gray-controls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GrayTableComponent } from './components/gray-code-counter/gray-table/gray-table.component';
import { ControlsErrorPipe } from './components/gray-code-counter/gray-controls/controls-error.pipe';
import { InstructionComponent } from './components/instruction/instruction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShortAboutComponent,
    GrayCodeCounterComponent,
    FooterComponent,
    GrayControlsComponent,
    GrayTableComponent,
    ControlsErrorPipe,
    InstructionComponent,

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
