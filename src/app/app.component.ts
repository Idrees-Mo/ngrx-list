import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/models/app.state.model';
import { Item } from './store/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items$: Observable<Array<Item>>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.items$ = this.store.select((store) => store.items);
  }
}
