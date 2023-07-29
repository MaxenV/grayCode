import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';
import { GreyCodeMainComponent } from './components/grey-code-main/grey-code-main.component';
import { FooterComponent } from './components/footer/footer.component';
import { GreyControlsComponent } from './components/grey-code-main/grey-controls/grey-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShortAboutComponent,
    GreyCodeMainComponent,
    FooterComponent,
    GreyControlsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
