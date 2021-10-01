import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APPSTATE, TODO } from './models/models';
import { AddItem } from './store/todoActions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos$: Observable<TODO[]>;
  constructor(private store: Store<APPSTATE>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todos');
    setTimeout(() => {
      this.store.dispatch(
        new AddItem({ title: 'Hello, new task', done: false, id: 5 })
      );
    }, 3000);
  }
}
