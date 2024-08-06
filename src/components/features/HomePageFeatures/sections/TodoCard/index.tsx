'use client';

import {
  Card,
  Text,
  ActionIcon,
  Badge,
  Checkbox,
  Flex,
  Menu,
} from '@mantine/core';
import { Icon } from '@iconify/react';
import { useDisclosure } from '@mantine/hooks';
import ConfirmationModal from '@/components/ui/modal/ConfirmationModal';
import { Todo } from '@/utils/dummy-data/todo';

export default function TodoCard(props: Todo) {
  const [checked, { toggle }] = useDisclosure(props.done);
  return (
    <Card withBorder radius="md">
      <Flex direction="row" gap="md" justify="space-between" align="center">
        <Flex direction="row" gap="md" align="center">
          <Checkbox onChange={toggle} checked={checked} />
          <Text fw={500} td={checked ? 'line-through' : 'none'}>
            {props.todo}
          </Text>
        </Flex>
        <Menu shadow="md" width={200} radius="md">
          <Menu.Target>
            <ActionIcon size="lg" color="gray.7">
              <Icon icon="tabler:dots-vertical" />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
          <Menu.Label>Action</Menu.Label>

            <Menu.Item>
              <Flex direction="row" gap="sm" align="center">
                <Icon icon="tabler:pencil" />
                <Text fw={500}>Edit</Text>
              </Flex>
            </Menu.Item>
            <Menu.Item>
              <Flex direction="row" gap="sm" align="center" c="red.6" fw={600}>
                <Icon icon="tabler:trash" />
                <Text fw={500}>Delete</Text>
              </Flex>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
      <ConfirmationModal
        title="Are you sure?"
        description="This action cannot be undone."
        onConfirm={() => {}}
        onCancel={() => {}}
        color="red.6"
      />
    </Card>
  );
}
