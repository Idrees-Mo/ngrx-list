import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AddItem, RemoveItem } from './store/actions/item.actions';
import { AppState } from './store/models/app.state.model';
import { Item } from './store/models/item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  items$: Observable<Array<Item>>;
  newItem: Item = { id: '', name: '' };
  test;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.items$ = this.store.select((store) => store.items);
    // setTimeout(() => {
    //   this.store.dispatch(new AddItem({ id: '12', name: 'Lassi' }));
    // }, 3000);
  }

  addItem() {
    this.newItem.id = uuid();
    this.store.dispatch(new AddItem(this.newItem));

    this.newItem = { id: '', name: '' };
  }
  onRemove(id: string) {
    this.store.dispatch(new RemoveItem(id));
  }
}
