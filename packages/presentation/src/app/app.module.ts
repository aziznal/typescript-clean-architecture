import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CORE_IOC } from 'src/di/counter.ioc';
import { CounterComponent } from './counter/counter.component';

@NgModule({
    declarations: [AppComponent, CounterComponent],

    imports: [BrowserModule],

    providers: [...CORE_IOC],

    bootstrap: [AppComponent],
})
export class AppModule {}
