import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MyHeader} from 'my-lib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyHeader],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
  protected readonly title = signal('PROJECT-USING-LIBRARY');
}
