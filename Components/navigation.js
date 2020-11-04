import Link from 'next/link';
import { getPagesData } from '../data/pagesData.js';

export default function Navigation() {
  const pages = getPagesData();

  return (
    <div>
      {Object.keys(pages).map((e, index) => (
        <div>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`} key={index}>
            {pages[e].title}
          </Link>
        </div>
      ))}
    </div>
  );
}
