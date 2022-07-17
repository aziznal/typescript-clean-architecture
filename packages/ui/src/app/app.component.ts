import { IncrementCounterUsecase } from 'core';

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'hello-world';

    constructor(private incrementCounterUsecase: IncrementCounterUsecase) {
        this.incrementCounterUsecase.execute();
    }
}
