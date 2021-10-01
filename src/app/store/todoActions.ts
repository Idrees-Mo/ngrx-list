import { Action } from '@ngrx/store';

export enum actionTypes {
  ADD_ITEM = '[list] add item',
}

export class AddItem implements Action {
  readonly type = actionTypes.ADD_ITEM;
  constructor(public payload) {}
}

export type todosActions = AddItem;
