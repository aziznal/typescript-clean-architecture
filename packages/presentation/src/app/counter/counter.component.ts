import * as core from 'core';

import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    @Input('data')
    counter!: core.Counter;

    isEditing: boolean = false;

    constructor(
        private incrementCounterUsecase: core.IncrementCounterUsecase,
        private decrementCounterUsecase: core.DecrementCounterUsecase,

        private updateIncrementAmountUsecase: core.UpdateIncrementAmountUsecase,
        private updateDecrementAmountUsecase: core.UpdateDecrementAmountUsecase,

        private assignCounterLabelUsecase: core.AssignCounterLabelUsecase
    ) {}

    switchToEditMode() {
        this.isEditing = true;
    }

    applyEdits() {
        this.isEditing = false;
    }

    incrementCounter() {
        this.incrementCounterUsecase.execute(this.counter);

        this.counter.currentCount += this.counter.incrementAmount;
    }

    decrementCounter() {
        this.decrementCounterUsecase.execute(this.counter);

        this.counter.currentCount -= this.counter.decrementAmount;
    }
}
