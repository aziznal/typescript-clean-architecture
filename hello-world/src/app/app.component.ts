import { Component } from '@angular/core';

import { Foo } from '@proj1/src/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  foo: Foo = new Foo();

  constructor() {
    this.foo.sayHi()
  }
}
