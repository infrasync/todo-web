import { Button, Card, Flex, rem, Skeleton, Text } from '@mantine/core';

import { useGetQuote } from '@/services/quote/useGetQuote';

export interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

export default function RandomQuote() {
  const { data, refetch, isFetching } = useGetQuote();

  return (
    <Card withBorder={false} radius="md" data-testid="random-quote-card">
      {isFetching ? (
        <Flex direction="column" gap="xs">
          <Skeleton h={12} w={rem(300)} />
          <Skeleton h={12} w={rem(260)} />
          <Skeleton h={12} w={rem(100)} />
        </Flex>
      ) : (
        <Flex direction="column" gap="xs">
          <Text fw={500}>"{data?.content || ''}"</Text>{' '}
          <strong>{data?.author || ''}</strong>{' '}
        </Flex>
      )}
      <Button
        radius="md"
        color="indigo.7"
        mt="sm"
        w="fit-content"
        onClick={() => refetch()}
      >
        Get Random Quote
      </Button>
    </Card>
  );
}
