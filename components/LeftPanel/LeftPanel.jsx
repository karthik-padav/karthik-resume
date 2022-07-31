import Image from "next/image";

export default function LeftPanel(props) {
  const { developer_details: dd } = props;
  return (
    <div>
      <div className="bg-white rounded-lg">
        <div className="p-4">
          <h1 className="text-xl uppercase font-semibold">{dd?.name?.data}</h1>
          <p className="text-xs uppercase">{dd?.designation?.data}</p>
        </div>
        <Image
          src={process.env.NEXT_PUBLIC_DP_URL}
          alt="dp"
          width={500}
          height={500}
          layout="responsive"
          objectFit="cover"
        />
        <div className="p-4">
          <ul>
            {[
              dd?.name,
              dd?.dob,
              dd?.email,
              dd?.contact_number,
              dd?.location,
            ].map((item, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 before:content-['\2022'] before:text-yellow-300 before:text-2xl before:mr-2 leading-none"
              >
                <p className="inline-block leading-none">
                  <span className="font-semibold text-sm">{item?.title}: </span>
                  <span className="text-sm">{item?.data}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 flex justify-center">
          <a
            href={process.env.NEXT_PUBLIC_RESUME}
            target="_blank"
            rel="noreferrer"
            className="bg-yellow-300 rounded-full pl-4 pr-1 py-1 leading-none flex items-center"
          >
            <p className="font-medium mr-2">Download CV</p>
            <div className="rounded-full bg-white w-8 h-8 flex justify-center items-center content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
