import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],

    imports: [BrowserModule, CommonModule, FormsModule, ReactiveFormsModule],

    providers: [],

    bootstrap: [AppComponent],
})
export class AppModule {}
