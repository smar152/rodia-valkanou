import Link from 'next/link';

export default function Header() {
  return (
    <div className="header">
      <Link as="/" href="/">
        <div>
          <div className="title">
            <h1>Ροδιά Βαλκάνου</h1>
          </div>
          <p className="description">Συμβουλευτική – Οργάνωση – Δημιουργία </p>
        </div>
      </Link>
    </div>
  );
}
