
interface FolderCardProps {
  name: string;
}

export default function FolderCard({ name }: FolderCardProps) {
  return (
    <div className="bg-gray-100 p-4 rounded shadow cursor-pointer hover:bg-gray-200">
      📁 {name}
    </div>
  );
}
