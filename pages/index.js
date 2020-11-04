import Head from 'next/head';
import Header from '../Components/header.js';
import Navigation from '../Components/navigation.js';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ροδιά Βαλκάνου</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Navigation />
        <div className="grid card">
          <h3>
            Ευφάνταστες και αποδοτικές λύσεις για επιχειρήσεις κάθε είδους.
          </h3>
          <p>
            Καλώς ήρθατε στο επόμενο βήμα της επιχειρηματικής σας οργάνωσης!
            Κάθε κίνηση στον αχανή επιχειρηματικό κόσμο επιτυγχάνει τον στόχο
            της μόνο εάν βασίζεται σε πραγματική ουσία και στηρίζεται σε στιβαρά
            οργανωμένο πλαίσιο. Οι υπηρεσίες που προσφέρονται βασίζονται στη
            συνέπεια, τη δεοντολογία, το αισθητικό κριτήριο, την
            αποτελεσματικότητα και εμπιστευτικότητα.
          </p>
        </div>
      </main>

      <footer>Powered by</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title,
        .description {
          width: 100%;
          padding: 1rem;
        }

        .title {
          font-size: 2em;
        }

        h1 {
          margin-block-start: 0em;
          margin-block-end: 0em;
        }

        .description {
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
