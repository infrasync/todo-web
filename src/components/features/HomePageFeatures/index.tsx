'use client';

import { Button, Container, Flex } from '@mantine/core';
import TodoCard from './sections/TodoCard';
import SearchTodos from './sections/SearchTodos';
import ModalAddTodo from './sections/ModalMutationTodo';
import RandomQuote from './sections/RandomQuote';
import Pagination from '@/components/ui/pagination/Pagination';
import { useTodoStore } from '@/stores/useTodo';
import { useState } from 'react';

const HomePageFeatures: React.FC = () => {
  const { todos } = useTodoStore();
  const [openAddTodo, setOpenAddTodo] = useState(false);
  return (
    <Container py="md">
      <Flex direction="column" gap="xl">
        <RandomQuote />
        <SearchTodos />
        <Button radius="md">Add Todo</Button>
        <Flex direction="column" gap="sm">
          {todos.map((todo) => (
            <TodoCard key={todo.id} {...todo} />
          ))}
        </Flex>
        <Flex justify="center">
          <Pagination total={100} page={1} onChange={() => {}} />
        </Flex>
      </Flex>
      <ModalAddTodo  />
    </Container>
  );
};

export default HomePageFeatures;
