import { TODO } from '../models/models';
import { actionTypes, todosActions } from './todoActions';

const initState = {
  todos: [
    { id: 1, done: false, title: 'task1 ' },
    { id: 2, done: true, title: 'hello world' },
  ] as Array<TODO>,
};
export const todoReducer = (state = initState, action: todosActions) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};
