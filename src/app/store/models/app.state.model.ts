import { Item } from './item.model';

export interface AppState {
  readonly items: Array<Item>;
}
