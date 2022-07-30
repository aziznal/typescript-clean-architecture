import { Component, OnInit } from '@angular/core';

import * as core from 'core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    counters: core.Counter[] = [
        {
            id: '123',
            label: 'New Counter',
            currentCount: 0,
            decrementAmount: 1,
            incrementAmount: 1,
        },
    ];

    constructor(private createCounterUsecase: core.CreateCounterUsecase) {}

    ngOnInit() {
        this.loadCounters();
    }

    createCounter(): void {
        const newCounter = this.createCounterUsecase.execute();

        this.counters.push(newCounter);
    }

    private loadCounters() {}
}
