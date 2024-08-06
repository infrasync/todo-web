'use client';

import { Icon } from '@iconify/react';
import { ActionIcon, TextInput } from '@mantine/core';

export default function SearchTodos() {
  return (
    <TextInput
      placeholder="Search"
      leftSection={<Icon icon="tabler:search" />}
      radius="lg"
      rightSection={
        <ActionIcon size="lg" color="gray.7" radius="lg" variant="subtle">
          <Icon icon="tabler:x" />
        </ActionIcon>
      }
    />
  );
}
