import { Component, OnInit } from '@angular/core';

import * as core from 'core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    counters: core.Counter[] = [];

    constructor(
        private createCounterUsecase: core.CreateCounterUsecase,
        private getAllCountersUsecase: core.GetAllCountersUsecase
    ) {}

    ngOnInit() {
        this.loadCounters();
    }

    createCounter(): void {
        const newCounter = this.createCounterUsecase.execute();

        this.counters.push(newCounter);
    }

    private loadCounters() {
        this.counters = this.getAllCountersUsecase.execute();
    }
}
