export default function Projects({ projects = [] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden p-4 md:p-10">
      <h1 className="text-xl mb-6 uppercase relative inline-block underline underline-offset-0 decoration-yellow-300 decoration-4">
        What can a <span className="font-medium">Web developer</span> do, you
        ask?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {projects.map((item, index) => (
          <a
            href={item.href}
            rel="noreferrer"
            target="_blank"
            key={index}
            className="bg-gray-100 p-6 rounded-lg overflow-hidden"
          >
            <div className="transform transition duration-200 hover:scale-110">
              <p className="font-medium">{item.title}</p>
              <p className="text-gray-600 text-sm">{item.stack}</p>
              <p className="text-gray-600 text-sm mt-2">{item.discription}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
