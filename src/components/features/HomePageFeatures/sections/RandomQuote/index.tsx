import { Icon } from '@iconify/react';
import { Flex, Card, Text, ActionIcon } from '@mantine/core';

interface Quote {
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
  const quotes: Quote[] = [
    {
      _id: '1',
      content: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs',
      tags: ['inspiration', 'success'],
      authorSlug: 'steve-jobs',
      length: 100,
      dateAdded: '2023-01-01',
      dateModified: '2023-01-01',
    },
  ];

  return (
    <Card withBorder={false} radius="md">
      <Text fw={500}>"{quotes[0].content}"</Text>{' '}
      <strong>{quotes[0].author}</strong>
    </Card>
  );
}
