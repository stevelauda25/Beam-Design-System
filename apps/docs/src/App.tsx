import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Agentation } from 'agentation';
import { Sidebar } from './components/shell/Sidebar.js';
import { SidebarDrawer } from './components/shell/SidebarDrawer.js';
import { Topbar } from './components/shell/Topbar.js';

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5] md:h-screen md:overflow-hidden">
      <Topbar onMenuClick={() => setDrawerOpen(true)} />
      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="flex min-h-0 flex-1">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="min-w-0 flex-1 p-1 md:overflow-auto">
          <div className="min-h-full rounded-lg border border-black/10 bg-white">
            <Outlet />
          </div>
        </main>
      </div>
      {import.meta.env.DEV && <Agentation />}
    </div>
  );
}
