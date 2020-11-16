import Link from "next/link";
import { pages } from "../data/pagesData.js";

export default function MenuLinks({ currentPageTitle, closeMenu }) {
  const menuItems = Object.keys(pages).filter(p => p !== "home");

  return (
    <>
      {menuItems.map((e, index) => (
        <div key={index} onClick={closeMenu}>
          <Link as={`/${pages[e].slug}`} href={`/${pages[e].slug}`}>
            <div
              className={`link mb-2 d-flex flex-row align-items-center  ${
                currentPageTitle === pages[e].title ? "current" : ""
              }`}
            >
              <img
                src={pages[e].logoSrc}
                className="img-fluid mr-4"
                alt="cube"
              />
              <div>{pages[e].title}</div>
            </div>
          </Link>
        </div>
      ))}

      <style jsx>
        {`
          .link {
            cursor: pointer;
          }
          .current {
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
}
