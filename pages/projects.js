import Layout from "components/Layout";
import { getData } from "llib/common";
import Projects from "components/Body/Projects";

export default function Sk(props) {
  const { data } = props;
  const {
    menu = [],
    about_me = [],
    work_history = [],
    education_histort = [],
    skills = [],
    projects = [],
  } = data;
  return (
    <>
      <Layout {...props} activeTab="/projects">
        <div className="mt-4">
          <Projects projects={projects} />
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
