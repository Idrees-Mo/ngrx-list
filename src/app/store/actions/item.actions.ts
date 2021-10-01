import { Action } from '@ngrx/store';
import { Item } from '../models/item.model';

export enum ItemActionTypes {
  ADD_ITEM = '[Items] add item',
}

export class AddItem implements Action {
  readonly type = ItemActionTypes.ADD_ITEM;

  constructor(public payload: Item) {}
}

export type ItemAction = AddItem;
