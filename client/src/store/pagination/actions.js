import {CURRENT_PAGE, FILTERED_TODO_LIST} from "../types";

export const setCurrentPage = page => {
  return {
      type: CURRENT_PAGE,
      payload: page
  }
};

export const setCurrentTodoList = list => {
  return {
      type: FILTERED_TODO_LIST,
      payload: list
  }
};