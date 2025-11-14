import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyHeader} from '../../../my-lib/src/my-header/my-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeader],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('my-app');
}
