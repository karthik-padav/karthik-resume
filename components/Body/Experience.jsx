import ListWrapper from "components/ListWrapper";

export default function Resume(props) {
  const { work_history = [], education_histort = [] } = props;
  return (
    <div className="bg-white rounded-lg overflow-hidden p-6 md:p-10">
      <h1 className="text-xl mb-8 uppercase relative inline-block underline underline-offset-0 decoration-yellow-300 decoration-4">
        EXPERIENCE:
      </h1>

      <div className="mb-8">
        <ListWrapper header="WORKING HISTORY" list={work_history} />
      </div>
      <ListWrapper header="EDUCATION HISTORY" list={education_histort} />
    </div>
  );
}
