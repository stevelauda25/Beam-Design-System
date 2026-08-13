import { PageHeader } from '../components/docs/PageHeader.js';
import { ComponentGrid } from '../components/home/ComponentGrid.js';

export default function Home() {
  return (
    <div className="flex flex-col gap-[31.5px] p-3">
      <PageHeader
        title="Beam Design System"
        description="React components built on tokens. Light/dark, accessible."
      />
      <ComponentGrid />
    </div>
  );
}
