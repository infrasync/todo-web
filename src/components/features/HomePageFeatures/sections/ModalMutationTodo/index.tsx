'use client';

import { Modal, Textarea, Flex, Title, Button } from '@mantine/core';
import { useTodoStore } from '@/stores/useTodo';
type Props = {
  onClose: () => void;
  opened: boolean;
};

export default function ModalAddTodo(props: Props) {
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
        <Textarea placeholder="Todo" radius="md" />
        <Flex direction="row" gap="md" justify="end">
          <Button radius="md" color="orange.4" onClick={props.onClose}>
            Cancel
          </Button>
          <Button radius="md">Save</Button>
        </Flex>
      </Flex>
    </Modal>
  );
}
