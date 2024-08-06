'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Flex, Modal, Textarea, Title } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

import { todoSchema } from '@/lib/form-validation/todo';

import { useTodoStore } from '@/stores/useTodo';

type Props = {
  onClose: () => void;
  opened: boolean;
  type: 'ADD' | 'UPDATE';
  idTodo?: string;
};

export default function ModalMutationTodo(props: Props) {
  const { addTodo, updateTodo, todos } = useTodoStore();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      todo: '',
    },
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: z.infer<typeof todoSchema>) => {
    if (props.type === 'ADD') {
      addTodo(data);
    } else if (props.type === 'UPDATE' && props.idTodo) {
      updateTodo(props.idTodo || '', data);
    }
    reset();
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
        <Title order={4}>Add Todo</Title>
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
