import { Action } from '@ngrx/store';
import { Item } from '../models/item.model';

export enum ItemActionTypes {
  ADD_ITEM = '[Items] add item',
  REMOVE_ITEM = '[Items] remove item',
}

export class AddItem implements Action {
  readonly type = ItemActionTypes.ADD_ITEM;

  constructor(public payload: Item) {}
}

export class RemoveItem implements Action {
  readonly type = ItemActionTypes.REMOVE_ITEM;

  constructor(public payload: string) {}
}

export type ItemAction = AddItem | RemoveItem;
