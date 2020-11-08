import Link from "next/link";
import { pages } from "../data/pagesData.js";

export default function Navigation() {
  const menuItems = Object.keys(pages).filter(p => p !== "home");
  return (
    <div className="pt-3">
      {menuItems.map((e, index) => (
        <div key={index}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            <div className="link row mb-2">
              <img
                src={pages[e].logoSrc}
                className="img-fluid col-3"
                alt="cube"
              />
              {pages[e].title}
            </div>
          </Link>
        </div>
      ))}
      <div className="pt-4">
        <img
          src="https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/gray_cube.png"
          className="img-fluid"
          alt="logo"
        />
      </div>

      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
