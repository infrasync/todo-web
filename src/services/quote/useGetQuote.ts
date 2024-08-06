import { useQuery } from '@tanstack/react-query';

import type { Quote } from '@/components/features/HomePageFeatures/sections/RandomQuote';

export const useGetQuote = () =>
  useQuery<Quote, Error>({
    queryKey: ['get-quote'],
    queryFn: async () => {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      return data;
    },
  });
