import { Component, Input, OnInit } from '@angular/core';
import * as core from 'core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
    @Input('data')
    counter!: core.Counter;

    isEditing: boolean = false;

    switchToEditMode() {
        this.isEditing = true;
    }

    applyEdits() {
        this.isEditing = false;
    }
}
