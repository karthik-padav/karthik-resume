import ProgressBar from "components/ProgressBar";

export default function Skills({ skills = [] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {skills.map((item, index) => (
          <div key={index}>
            <ProgressBar title={item?.lang} percentage={item?.percentage} />
          </div>
        ))}
      </div>
    </div>
  );
}
