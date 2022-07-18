import { Component } from '@angular/core';
import { GetSomethingUsecase } from 'core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'hello-world';

    constructor(private getSomethingUsecase: GetSomethingUsecase) {
        this.getSomethingUsecase.execute().then((data) => {
            console.log(data);
        });
    }
}
