'use client';

import { Icon } from '@iconify/react';
import { ActionIcon, Card, Checkbox, Flex, Menu, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import ConfirmationModal from '@/components/ui/modal/ConfirmationModal';

import { useTodoStore } from '@/stores/useTodo';

import { Todo } from '@/utils/dummy-data/todo';
import { useShowNotification } from '@/utils/useShowNotification';

import ModalMutationTodo from '../ModalMutationTodo';

export default function TodoCard(props: Todo) {
  const [checked, { toggle }] = useDisclosure(props.done);
  const [openedDeleteModal, { toggle: toggleDeleteModal }] =
    useDisclosure(false);
  const [openedUpdateModal, { toggle: toggleUpdateModal }] =
    useDisclosure(false);
  const { removeTodo } = useTodoStore();
  const showNotification = useShowNotification();

  const handleDelete = () => {
    removeTodo(props.id);
    showNotification({
      title: 'Deleted',
      message: 'Todo deleted successfully',
      type: 'info',
    });
  };

  return (
    <Card withBorder radius="md" id={props.id} key={props.id}>
      <Flex direction="row" gap="md" justify="space-between" align="center">
        <Flex direction="row" gap="md" align="center">
          <Checkbox onChange={toggle} checked={checked} />
          <Text fw={500} td={checked ? 'line-through' : 'none'}>
            {props.todo}
          </Text>
        </Flex>
        <Menu shadow="md" width={200} radius="md">
          <Menu.Target>
            <ActionIcon size="lg" color="gray.7" radius="lg">
              <Icon icon="tabler:dots-vertical" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Label>Action</Menu.Label>

            <Menu.Item>
              <Flex
                direction="row"
                gap="sm"
                align="center"
                onClick={toggleUpdateModal}
              >
                <Icon icon="tabler:pencil" />
                <Text fw={500}>Edit</Text>
              </Flex>
            </Menu.Item>
            <Menu.Item>
              <Flex
                direction="row"
                gap="sm"
                align="center"
                c="red.6"
                fw={600}
                onClick={toggleDeleteModal}
              >
                <Icon icon="tabler:trash" />
                <Text fw={500}>Delete</Text>
              </Flex>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <ConfirmationModal
        opened={openedDeleteModal}
        title="Delete Todo"
        alertTitle="Are you sure to delete this todo?"
        description="This action cannot be undone."
        onConfirm={() => handleDelete()}
        onCancel={() => toggleDeleteModal()}
        color="red.6"
      />
      <ModalMutationTodo
        opened={openedUpdateModal}
        onClose={() => toggleUpdateModal()}
        type="UPDATE"
        idTodo={props.id}
      />
    </Card>
  );
}
