import About from "components/Body/About";
import Layout from "components/Layout";
import { getData } from "llib/common";

export default function Home(props) {
  const {
    data: { about_me = [], skills },
  } = props;

  return (
    <>
      <Layout {...props} activeTab="/">
        <div className="mt-4">
          <About data={about_me} skills={skills} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const baseUrl = process.env.NEXT_PUBLIC_CONTENT_URL;
  let data = {};
  if (baseUrl) data = await getData(baseUrl);
  return { props: { data } };
}
