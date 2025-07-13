
export default function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b">
      <input
        type="text"
        placeholder="Search in Drive"
        className="border rounded px-4 py-2 w-1/2"
      />
      <div className="flex items-center gap-4">
        <button className="text-sm">⚙️</button>
        <button className="text-sm">👤</button>
      </div>
    </div>
  );
}
