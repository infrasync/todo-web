

import HomePageFeatures from '@/components/features/HomePageFeatures';
import PageLayout from '@/components/layouts/PageLayout';

export default async function HomePage() {
  return (
    <PageLayout>
      <HomePageFeatures />
    </PageLayout>
  );
}
