import { create } from 'zustand';
import type { Todo } from '@/utils/dummy-data/todo';
import { todos } from '@/utils/dummy-data/todo';

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: string) => void;
  updateTodo: (id: string, todo: Todo) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  todos,
  addTodo: (todo: Todo) => {
    set((state) => ({
      todos: [...state.todos, todo],
    }));
  },
  removeTodo: (id: string) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
  updateTodo: (id: string, todo: Todo) => {
    set((state) => ({
      todos: state.todos.map((todoItem) =>
        todoItem.id === id ? todo : todoItem,
      ),
    }));
  },
}));
