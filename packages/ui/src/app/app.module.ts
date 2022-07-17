import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CORE_IOC } from 'src/di/core.ioc';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ...CORE_IOC
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
