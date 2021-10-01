export interface TODO {
  title: string;
  id: number;
  done: boolean;
}

export interface APPSTATE {
  todos: Array<TODO>;
}
