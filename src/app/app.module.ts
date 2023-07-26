import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { ShortAboutComponent } from './components/short-about/short-about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ShortAboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
