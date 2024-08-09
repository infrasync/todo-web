import { create } from 'zustand';

import type { Todo } from '@/utils/dummy-data/todo';
import { todos } from '@/utils/dummy-data/todo';

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Pick<Todo, 'todo'>) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, todo: Pick<Todo, 'todo'>) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos,
  addTodo: (todo: Pick<Todo, 'todo'>) => {
    const newTodo: Todo = {
      ...todo,
      id: [...Array(5)]
        .map(() => Math.random().toString(36).substr(2, 9))
        .join(''),
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    set((state) => ({
      todos: [newTodo, ...state.todos],
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id: string, todo: Pick<Todo, 'todo'>) => {
    set((state) => {
      const currentTodo = state.todos.find((todoItem) => todoItem.id === id);
      if (currentTodo?.todo) {
        const updatedTodo: Todo = {
          id: currentTodo?.id,
          done: currentTodo?.done,
          todo: todo.todo,
          updatedAt: new Date().toISOString(),
          createdAt: currentTodo?.createdAt,
        };
        return {
          todos: state.todos.map((todoItem) =>
            todoItem.id === id ? updatedTodo : todoItem,
          ),
        };
      }
      return state;
    });
  },
}));
