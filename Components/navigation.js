import Link from "next/link";
import { pages } from "../data/pagesData.js";

export default function Navigation() {
  const menuItems = Object.keys(pages).filter(p => p !== "home");
  return (
    <div>
      {menuItems.map((e, index) => (
        <div key={index}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            {pages[e].title}
          </Link>
        </div>
      ))}
    </div>
  );
}
