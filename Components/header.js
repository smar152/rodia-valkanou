import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title link row">
            <div className="col-4 col-md-1">
              <img
                src="https://raw.githubusercontent.com/smar152/rodia-valkanou/master/logo/gray_cube.png"
                className="img-fluid"
                alt="logo"
              />
            </div>
            <div className="col-8 col-md-11">
              <h1>Ροδιά Βαλκάνου</h1>
            </div>
          </div>
          <hr />
          <p className="description">Συμβουλευτική – Οργάνωση – Δημιουργία </p>
          <hr />
        </div>
      </Link>

      <style jsx>
        {`
          .title h1 {
            font-size: 48px;
          }
          .link {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
