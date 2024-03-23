import Layout from "components/Layout";
import { getData } from "llib/common";
import Skills from "components/Body/Skills";

export default function Sk(props) {
  const { data } = props;
  const { skills = [] } = data;
  return (
    <>
      <Layout {...props} activeTab="/skills">
        <div className="mt-4">
          <Skills skills={skills} />
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
