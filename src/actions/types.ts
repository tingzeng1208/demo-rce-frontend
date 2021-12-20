import { FetchTodosAction, DeleteTodoAction } from "./application";

export enum ActionTypes {
  fetchTodos,
  deleteTodos
}

export type Action = FetchTodosAction | DeleteTodoAction;