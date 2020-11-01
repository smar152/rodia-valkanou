import { useRouter } from 'next/router';
import { getPagesData } from '../../data/pagesData.js';

export default function Ypiresia() {
  const router = useRouter();
  console.log(router.query);

  const thisPage = router.query.ypiresia;
  console.log(thisPage);

  const pages = getPagesData();
  const pageContent = pages[thisPage].content;
  return (
    <div>
      <h1>lol hi {router.query.ypiresia}</h1>
      <div>{pageContent}</div>
    </div>
  );
}
