import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TODO } from './models/models';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      todos: (): any => {
        return [
          { title: 'take shower', done: true, id: 1 },
          { title: 'morning walk', done: false, id: 2 },
        ];
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
