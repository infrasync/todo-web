'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, Modal, Textarea, Title } from '@mantine/core';
import { parseAsInteger, parseAsString, useQueryState } from 'nuqs';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { todoSchema } from '@/lib/form-validation/todo';

import { useTodoStore } from '@/stores/useTodo';

import { useShowNotification } from '@/utils/useShowNotification';

type Props = {
  onClose: () => void;
  opened: boolean;
  type: 'ADD' | 'UPDATE';
  idTodo?: string;
};

export default function ModalMutationTodo(props: Props) {
  const { addTodo, updateTodo, todos } = useTodoStore();
  const [_, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const [__, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault(''),
  );
  const showNotification = useShowNotification();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: props.idTodo
        ? todos.find((todo) => todo.id === props.idTodo)?.todo
        : '',
    },
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: Partial<z.infer<typeof todoSchema>>) => {
    if (props.type === 'ADD') {
      addTodo(data as z.infer<typeof todoSchema>);
      showNotification({
        title: 'Success',
        message: 'Todo added successfully',
        type: 'success',
      });
    } else if (props.type === 'UPDATE' && props.idTodo) {
      updateTodo(props.idTodo || '', data as z.infer<typeof todoSchema>);
      showNotification({
        title: 'Updated',
        message: 'Todo updated successfully',
        type: 'info',
      });
    }
    reset();
    setPage(1);
    setSearch('');
    props.onClose();
  };

  return (
    <Modal
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
      opened={props.opened}
      onClose={props.onClose}
      radius="md"
    >
      <Flex direction="column" gap="md">
        <Title order={4}>
          {props.type === 'UPDATE' ? 'Update Todo' : 'Add Todo'}
        </Title>
        <Controller
          name="todo"
          control={control}
          defaultValue={todos.find((todo) => todo.id === props.idTodo)?.todo}
          render={({ field }) => (
            <Textarea
              placeholder="Todo"
              radius="md"
              {...field}
              error={errors.todo?.message}
            />
          )}
        />
        <Flex direction="row" gap="md" justify="end">
          <Button radius="md" color="orange.4" onClick={props.onClose}>
            Cancel
          </Button>
          <Button radius="md" onClick={handleSubmit(onSubmit)}>
            Save
          </Button>
        </Flex>
      </Flex>
    </Modal>
  );
}
