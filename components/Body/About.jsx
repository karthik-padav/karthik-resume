export default function About(props) {
  const { data } = props;
  console.log(props, "about me props");
  const currentDate = new Date();
  const started = new Date("Jan 01 2016");
  const diff =
    currentDate.getMonth() -
    started.getMonth() +
    12 * (currentDate.getFullYear() - started.getFullYear());

  const myExperiance = (diff / 12).toFixed(1);
  console.log(myExperiance, "monthTillDate123");

  return (
    <div className="bg-white rounded-lg overflow-hidden p-10">
      {data.map((item, index) => (
        <div key={index} className="last:mb-0 mb-6">
          <h1 className="text-xl mb-2 uppercase relative inline-block underline underline-offset-0 decoration-yellow-300 decoration-4">
            {item?.heading}:
          </h1>

          <ul>
            {(item?.content || []).map((c, c_index) => {
              let classNameStr = "";
              const bulletClass =
                "py-1 flex items-center before:content=['']  before:bg-yellow-300 before:rounded-full before:w-2 before:h-2 before:flex";
              if (item?.type === "bullet") classNameStr += ` ${bulletClass}`;
              else classNameStr += "mt-3";
              return (
                <li className={classNameStr} key={c_index}>
                  <span className={item?.type === "bullet" ? "ml-2" : ""}>
                    {c.replace(
                      "experience_time_stamp",
                      `${myExperiance} years`
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
