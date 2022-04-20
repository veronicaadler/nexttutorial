import '../styles/globals.css'
import Layout from "../components/Layout";

//global styled are imported here at the root so that they apply everywhere

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

//this is where our pages are rendered from.
