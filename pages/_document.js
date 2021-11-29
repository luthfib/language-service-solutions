import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const env = process.env.NEXT_PUBLIC_MAINTENANCE;
    return { ...initialProps, env };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-177857813-1"
          />
          <meta charset="UTF-8" />
          <meta name="keywords" content="langauge service solutions, interpretation, Murtado, Bustillos, video, translation" />
          <meta name="author" content="Language Service Solutions" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-177857813-1');
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
}
