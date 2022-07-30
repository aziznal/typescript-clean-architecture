import { Component } from '@angular/core';

import * as core from 'core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    counters: core.Counter[] = [];

    constructor(private createCounterUsecase: core.CreateCounterUsecase) {}

    createCounter(): void {
        const newCounter = this.createCounterUsecase.execute();

        this.counters.push(newCounter);
    }
}
