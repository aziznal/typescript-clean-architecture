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

    editedCounter!: core.Counter;

    isEditing: boolean = false;

    constructor(
        private incrementCounterUsecase: core.IncrementCounterUsecase,
        private decrementCounterUsecase: core.DecrementCounterUsecase,

        private updateIncrementAmountUsecase: core.UpdateIncrementAmountUsecase,
        private updateDecrementAmountUsecase: core.UpdateDecrementAmountUsecase,

        private assignCounterLabelUsecase: core.AssignCounterLabelUsecase
    ) {}

    ngOnInit() {
        this.editedCounter = this.getObjectCopy(this.counter);
    }

    switchToEditMode() {
        this.editedCounter = this.getObjectCopy(this.counter);

        this.isEditing = true;
    }

    applyEdits() {
        this.updateLabel();

        this.updateIncrementAmount();

        this.updateDecrementAmount();

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

    private updateLabel() {
        try {
            this.assignCounterLabelUsecase.execute({ ...this.counter, label: this.editedCounter.label });

            this.counter.label = this.editedCounter.label;
        } catch (error: unknown) {
            alert('Could not update label. See console (F12) for details');

            throw error;
        }
    }

    private updateIncrementAmount() {
        try {
            this.updateIncrementAmountUsecase.execute({
                ...this.counter,
                incrementAmount: this.editedCounter.incrementAmount,
            });

            this.counter.incrementAmount = this.editedCounter.incrementAmount;
        } catch (error: unknown) {
            alert('Could not update Increment Amount. See console (F12) for details');

            throw error;
        }
    }

    private updateDecrementAmount() {
        try {
            this.updateDecrementAmountUsecase.execute({
                ...this.counter,
                decrementAmount: this.editedCounter.decrementAmount,
            });

            this.counter.decrementAmount = this.editedCounter.decrementAmount;
        } catch (error: unknown) {
            alert('Could not update Decrement Amount. See console (F12) for details');

            throw error;
        }
    }

    private getObjectCopy(obj: any): any {
        return JSON.parse(JSON.stringify(obj));
    }
}
