import {
  ItemAction,
  ItemActionTypes,
  RemoveItem,
} from '../actions/item.actions';
import { Item } from '../models/item.model';

const initailState: Array<Item> = [
  { id: '123456', name: 'Milk' },
  { id: '123457', name: 'Bread' },
];

export function ItemReducer(
  state: Array<Item> = initailState,
  action: ItemAction
) {
  switch (action.type) {
    case ItemActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ItemActionTypes.REMOVE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}
