import ProgressBar from "components/ProgressBar";

export default function Skills({ skills = [] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden p-10">
      <h1 className="text-xl mb-8 uppercase relative inline-block underline underline-offset-0 decoration-yellow-300 decoration-4">
        SKILLS:
      </h1>

      <div className="grid grid-cols-2 gap-4">
        {skills.map((item, index) => (
          <div key={index}>
            <ProgressBar title={item?.lang} percentage={item?.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
}
