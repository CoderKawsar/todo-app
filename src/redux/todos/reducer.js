import initialState from "./initialState";
import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGLED,
} from "./actionTypes";

const nextTodoId = (todos) => {
  const maxTodoId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxTodoId + 1;
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          completed: false,
        },
      ];

    case TOGGLED:
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });

    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== action.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          color: action.payload.color,
        };
      });

    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });

    //   return [
    //     ...state,
    //     {
    //       completed: true,
    //     },
    //   ];

    case CLEARCOMPLETED:
      return state.filter((todo) => !todo.completed);

    default:
      return state;
  }
}
