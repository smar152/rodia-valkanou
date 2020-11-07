import Link from "next/link";
import { pages } from "../data/pagesData.js";

export default function Navigation() {
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
