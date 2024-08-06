export type Todo = {
  id: string;
  todo: string;
  done: boolean;
  createdAt: string;
  updatedAt: string;
};

export const todos: Todo[] = [
  {
    id: '12hf4',
    todo: 'Learn React',
    done: false,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
  {
    id: 'tg456',
    todo: 'Dinner with friends',
    done: false,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
  {
    id: '98jnt',
    todo: 'Buy groceries for mom',
    done: true,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
  {
    id: 'a8yThgj',
    todo: 'Go to the gym',
    done: false,
    createdAt: '2023-01-01T00:00:00.000Z',
    updatedAt: '2023-01-01T00:00:00.000Z',
  },
];
