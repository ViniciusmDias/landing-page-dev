import { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head title="Lançamentos 7 dígitos - XFlow">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta name="robots" content="all" />
        <meta
          name="description"
          content="Aulas sobre lançamentos de múltiplos 7 dígitos com o XFlow"
        />
        <meta property="og:title" content="Lançamentos 7 dígitos - XFlow" />
        <meta
          property="og:description"
          content="Aulas sobre lançamentos de múltiplos 7 dígitos com o XFlow"
        />
        <meta
          property="og:image"
          content="https://toppng.com/uploads/preview/pacote-de-dinheiro-11551050258m2xjcaz8ke.png"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1XJB4TVN1Y"
        />
        <Script
          id="googleAnalytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1XJB4TVN1Y');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 