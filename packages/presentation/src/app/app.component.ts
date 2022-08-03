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

    @ViewChild('counterList')
    counterListRef!: ElementRef<HTMLElement>;

    allCounters: core.Counter[] = [];

    filteredCounters: core.Counter[] = [];

    constructor(
        private createCounterUsecase: core.CreateCounterUsecase,
        private deleteCounterUsecase: core.DeleteCounterUsecase,

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

        this.scrollCounterListToBottom();
    }

    updateFilteredCounters(filter?: string) {
        if (!filter) filter = this.filterInputRef.nativeElement.value;

        this.filteredCounters = this.filterCountersUsecase.execute(this.allCounters, filter);
    }

    deleteCounter(deletedCounterId: string) {
        const deleteConfirmed = confirm('Are you sure you want to delete this counter?');

        if (!deleteConfirmed) return;

        this.deleteCounterUsecase.execute(deletedCounterId);

        this.allCounters = this.allCounters.filter((counter) => counter.id !== deletedCounterId);

        this.updateFilteredCounters();
    }

    private scrollCounterListToBottom() {
        setTimeout(() => {
            this.counterListRef.nativeElement.scrollTo({
                behavior: 'smooth',
                top: this.counterListRef.nativeElement.scrollHeight,
            });
        });
    }

    private loadCounters() {
        this.allCounters = this.getAllCountersUsecase.execute();

        this.updateFilteredCounters();

        this.changeDetector.detectChanges();
    }
}
