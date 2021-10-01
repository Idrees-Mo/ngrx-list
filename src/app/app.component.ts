import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/models/app.state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-shoppinglist';

  constructor(private store: Store<AppState>) {}
}
