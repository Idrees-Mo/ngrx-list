import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { APPSTATE, TODO } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos$: Observable<any>;
  constructor(private store: Store<APPSTATE>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select((store) => store.todos);
  }
}
