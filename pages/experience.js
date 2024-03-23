import Layout from "components/Layout";
import Experience from "components/Body/Experience";
import { getData } from "llib/common";

export default function Ex(props) {
  const { data } = props;
  const { work_history = [], education_histort = [] } = data;
  return (
    <>
      <Layout {...props} activeTab="/experience">
        <div className="mt-4">
          <Experience
            work_history={work_history}
            education_histort={education_histort}
          />
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
