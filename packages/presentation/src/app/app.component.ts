import * as core from 'core';

import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
    @ViewChild('filterInput')
    filterInputRef!: ElementRef<HTMLInputElement>;

    allCounters: core.Counter[] = [];

    filteredCounters: core.Counter[] = [];

    constructor(
        private createCounterUsecase: core.CreateCounterUsecase,
        private getAllCountersUsecase: core.GetAllCountersUsecase,

        private filterCountersUsecase: core.FilterCountersByLabelUsecase,

        private changeDetector: ChangeDetectorRef
    ) {}

    ngAfterViewInit() {
        this.loadCounters();
    }

    createCounter(): void {
        const newCounter = this.createCounterUsecase.execute();

        this.allCounters.push(newCounter);

        this.updateFilteredCounters();
    }

    updateFilteredCounters(filter?: string) {
        if (!filter) filter = this.filterInputRef.nativeElement.value;

        this.filteredCounters = this.filterCountersUsecase.execute(this.allCounters, filter);
    }

    private loadCounters() {
        this.allCounters = this.getAllCountersUsecase.execute();

        this.updateFilteredCounters();

        this.changeDetector.detectChanges();
    }
}
