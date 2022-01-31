import '../styles/globals.scss';
import Head from 'next/head';
import "bootstrap/scss/bootstrap.scss";

function MyApp({ Component, pageProps }) {

  return (
      <>
        <Head>
          <meta charSet='UTF-8' />
          <meta
              name='viewport'
              content='width=device-width, initial-scale=1.0'
          />
        </Head>
        <Component {...pageProps} />
      </>
  )
}

// AU|WPAY|TUITION|2021-2022|LWH2TUEMK2ATR1E

export default MyApp
