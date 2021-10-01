import { TODO } from '../models/models';

const initState = {
  todos: [
    { id: 1, done: false, title: 'task1 ' },
    { id: 2, done: true, title: 'hello world' },
  ] as Array<TODO>,
};
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
