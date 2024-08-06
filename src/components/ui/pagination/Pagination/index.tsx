'use client';

import { Pagination as MantinePagination, Text, Flex } from '@mantine/core';

interface PaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export default function PaginationComponent({
  total,
  page,
  onChange,
}: PaginationProps) {
  return (
    <Flex direction="column" gap="md" align="center">
        <Text fw={500}>
            {page * 4} - {(page + 1) * 4} of {total}
        </Text>
      <MantinePagination
        total={total}
        value={page}
        onChange={onChange}
        size="md"
        radius="md"
      />
    </Flex>
  );
}
