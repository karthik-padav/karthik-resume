export default function ProgressBar({ title = "", percentage = "" }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <p>{title}</p>
        <p>{percentage}</p>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          style={{ width: `${percentage}` }}
          className="h-3 bg-yellow-300 rounded-full"
        />
      </div>
    </div>
  );
}
