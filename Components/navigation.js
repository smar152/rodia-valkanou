import Link from 'next/link';
import { getPagesData } from '../data/pagesData.js';

export default function Navigation() {
  const pages = getPagesData();

  return (
    <div>
      {Object.keys(pages).map((e, index) => (
        <div key={index}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            {pages[e].title}
          </Link>
        </div>
      ))}
    </div>
  );
}
