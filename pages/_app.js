import Link from 'next/link';

function App({ Component, pageProps }) {
  return (
    <html>
      <h1>Mon app</h1>
      <nav>
        <Link href="/thomas">thomas</Link> -<Link href="/luc">luc</Link> -<Link href="/jose">José</Link> -
        <Link href="/manu">Manu</Link> -<Link href="/benjamin">benjamin</Link>
      </nav>

      <Component {...pageProps} />

      <footer>Mon footer</footer>
    </html>
  );
}

export default App;
