import { ItemAction, ItemActionTypes } from '../actions/item.actions';
import { Item } from '../models/item.model';

const initailState: Array<Item> = [{ id: '123456', name: 'Milk' }];

export function ItemReducer(
  state: Array<Item> = initailState,
  action: ItemAction
) {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
