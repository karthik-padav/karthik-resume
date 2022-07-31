export default function ListWrapper(props) {
  const { header = false, list = [] } = props;
  return (
    <>
      <ul>
        {header && (
          <li className="flex items-center pb-8 border-l-2">
            <div className="bg-yellow-300 rounded-full flex justify-center content-center items-center w-12 h-12 -ml-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-xl pl-2">{header}</p>
          </li>
        )}

        {list.map((item, index) => (
          <li
            key={index}
            className="relative -mt-4 last:pb-0 pb-8 last:border-l-0 border-l-2 before:content=['']  before:bg-white before:border-4 before:border-yellow-300 before:rounded-full before:w-4 before:h-4 before:flex before:absolute before:-left-2 before:top-2"
          >
            <div className="pl-8">
              {item?.title && (
                <p>
                  <span className="font-medium">{item.title}</span>
                  <span className="text-gray-600 text-sm">
                    {" "}
                    - {item.active}
                  </span>
                </p>
              )}
              {(item?.info || []).map((i, index) => (
                <p className="text-sm text-gray-600" key={index}>
                  {i}
                </p>
              ))}
              {item?.li?.length > 0 && (
                <ul>
                  {item.li.map((i, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-600 before:content-['\2022'] before:text-yellow-300 before:text-2xl before:mr-2 leading-none"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
