
interface QuickActionProps {
  label: string;
}

export default function QuickAction({ label }: QuickActionProps) {
  return (
    <button className="px-4 py-2 bg-white border rounded shadow hover:bg-gray-50">
      {label}
    </button>
  );
}
