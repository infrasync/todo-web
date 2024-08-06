'use client';

import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Button,
  Container,
  Flex,
  rem,
  TextInput,
} from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { useState } from 'react';

import Pagination from '@/components/ui/pagination/Pagination';

import { useTodoStore } from '@/stores/useTodo';

import ModalMutationTodo from './sections/ModalMutationTodo';
import RandomQuote from './sections/RandomQuote';
import TodoCard from './sections/TodoCard';

const HomePageFeatures: React.FC = () => {
  const { todos } = useTodoStore();
  const [openAddTodo, setOpenAddTodo] = useState(false);
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault(''),
  );
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const [debouncedSearch] = useDebouncedValue(search, 500);

  return (
    <Container py="md">
      <Flex direction="column" gap="xl">
        <RandomQuote />
        <TextInput
          placeholder="Search"
          value={search}
          leftSection={<Icon icon="tabler:search" />}
          onChange={(e) => setSearch(e.currentTarget.value)}
          radius="lg"
          rightSection={
            <ActionIcon
              size="lg"
              color="gray.7"
              radius="lg"
              variant="subtle"
              onClick={() => setSearch('')}
            >
              <Icon icon="tabler:x" />
            </ActionIcon>
          }
        />{' '}
        <Button radius="md" onClick={() => setOpenAddTodo(true)}>
          Add Todo
        </Button>
        <Flex direction="column" gap="sm" mih={rem(320)}>
          {todos
            .slice((page - 1) * 4, page * 4)
            .filter((v) => {
              const trimmedQuery = debouncedSearch.trim(); // Menghilangkan spasi di awal/akhir

              // Jika query kosong, kembalikan true untuk semua item
              if (trimmedQuery === '') {
                return true;
              }

              // Buat regex dan uji judul todo
              const regex = new RegExp(trimmedQuery, 'i');
              return regex.test(v.todo);
            })
            .map((todo) => (
              <TodoCard key={todo.id} {...todo} />
            ))}
        </Flex>
        <Flex justify="center">
          <Pagination
            total={Math.ceil(todos.length / 4)}
            page={page}
            onChange={(v) => setPage(v)}
          />
        </Flex>
      </Flex>
      <ModalMutationTodo
        opened={openAddTodo}
        onClose={() => setOpenAddTodo(false)}
        type="ADD"
      />
    </Container>
  );
};

export default HomePageFeatures;
