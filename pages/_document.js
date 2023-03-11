import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content="Cafeteria - Quiosco de comida y más"
        />
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>
      <body className="bg-slate-100/50">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
