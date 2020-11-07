import { useRouter } from 'next/router';
import { getPagesData } from '../data/pagesData.js';
import PageLayout from '../Components/pageLayout.js';

export default function Page() {
  const router = useRouter();

  const thisPage = router.query.page;
  console.log(thisPage);

  const { content, title, subtitle } = getPagesData()[thisPage];
  return (
    <PageLayout
      key="page"
      pageTitle={title}
      pageSubtitle={subtitle}
      pageContent={content}
    />
  );
}
