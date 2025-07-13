
import DriveLayout from '../components/DriveLayout';
import FolderCard from '../components/FolderCard';
import QuickAction from '../components/QuickAction';

export default function Home() {
  return (
    <DriveLayout>
      <h1 className="text-2xl font-semibold mb-4">Welcome to Drive</h1>
      <div className="flex gap-4 mb-6">
        <QuickAction label="Learn about Gemini in Drive" />
        <QuickAction label="Catch me up" />
        <QuickAction label="Summarize a folder in Drive" />
      </div>
      <h2 className="text-xl font-semibold mb-2">Suggested folders</h2>
      <div className="grid grid-cols-2 gap-4">
        <FolderCard name="Google AI Studio" />
        <FolderCard name="MAAR" />
      </div>
    </DriveLayout>
  );
}
