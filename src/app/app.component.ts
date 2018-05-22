import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('state', [
      state('increase', style({})),
      state('decrease', style({})),
      transition(
        '* => increase',
        animate(
          '0.5s',
          keyframes([
            style({ backgroundColor: 'transparent' }),
            style({ backgroundColor: 'green' }),
            style({ backgroundColor: 'transparent' })
          ])
        )
      ),
      transition(
        '* => decrease',
        animate(
          '0.5s',
          keyframes([
            style({ backgroundColor: 'transparent' }),
            style({ backgroundColor: 'red' }),
            style({ backgroundColor: 'transparent' })
          ])
        )
      )
    ])
  ]
})
export class AppComponent {
  title = 'app';
  num = 0;
  state = 'n/a';

  add() {
    this.state = 'increase';
    this.num = this.num + 1;
  }

  minus() {
    this.state = 'decrease';
    this.num = this.num - 1;
  }
}
