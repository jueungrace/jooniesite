import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
