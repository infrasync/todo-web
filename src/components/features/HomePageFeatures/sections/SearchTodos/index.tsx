'use client';

import { ActionIcon, TextInput } from '@mantine/core';
import { Icon } from '@iconify/react';

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
