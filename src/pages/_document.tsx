import type { DocumentContext, DocumentInitialProps } from 'next/document'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <title>Memos</title>
        <Head>
          <meta
            name="msapplication-square70x70logo"
            content="/site-tile-70x70.png"
          />
          <meta
            name="msapplication-square150x150logo"
            content="/site-tile-150x150.png"
          />
          <meta
            name="msapplication-wide310x150logo"
            content="/site-tile-310x150.png"
          />
          <meta
            name="msapplication-square310x310logo"
            content="/site-tile-310x310.png"
          />
          <meta name="msapplication-TileColor" content="#000" />
          {/* safari */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#000" />
          <meta name="apple-mobile-web-app-title" content="Memos" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          {/* 一般 */}
          <meta name="application-name" content="myapp" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="カウントできるシンプルメモ帳" />
          <meta name="twitter:title" content={'Memos'} />
          <meta
            name="twitter:description"
            content={'カウントできるシンプルメモ帳'}
          />
          <meta
            name="twitter:image"
            content={
              'https://cdn.pixabay.com/photo/2012/04/13/00/07/note-31124_1280.png'
            }
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content={'Memos'} />
          <meta property="og:description" content={'文字数カウントメモ帳'} />
          <meta
            property="og:image"
            content={
              'https://cdn.pixabay.com/photo/2012/04/13/00/07/note-31124_1280.png'
            }
          />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// eslint-disable-next-line import/no-default-export
export default MyDocument
