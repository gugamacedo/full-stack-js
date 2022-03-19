import '../styles/globals.css'

import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav title="NextJS App" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
