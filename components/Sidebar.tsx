
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 h-screen">
      <ul className="space-y-2">
        <li className="font-bold text-blue-600">Home</li>
        <li>My Drive</li>
        <li>Shared with me</li>
        <li>Recent</li>
        <li>Starred</li>
        <li>Trash</li>
      </ul>
      <div className="mt-auto text-xs pt-8">199.5 MB of 2 TB used</div>
    </aside>
  );
}
