import "../styles/globals.css";
import Layout from "components/Layout";
import data from "assets/data/content";

function MyApp({ Component, pageProps }) {
  return (
    <Layout {...pageProps} data={data}>
      <Component {...pageProps} data={data} />
    </Layout>
  );
}

export default MyApp;
