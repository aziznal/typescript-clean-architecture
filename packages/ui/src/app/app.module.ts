import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CORE_IOC } from 'src/di/core.ioc';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [...CORE_IOC],
    bootstrap: [AppComponent],
})
export class AppModule {}
