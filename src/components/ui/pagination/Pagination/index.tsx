'use client';

import { Flex, Pagination as MantinePagination } from '@mantine/core';

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
