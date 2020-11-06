import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title">
            <h1>Ροδιά Βαλκάνου</h1>
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
        `}
      </style>
    </div>
  );
}
