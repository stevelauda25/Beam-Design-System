import { useState } from 'react';
import { NavigationButton } from '@beam/ui';
import personalIcon from '../../assets/beam-app/personal.svg';
import panelIcon from '../../assets/beam-app/panel.svg';
import panelExpandIcon from '../../assets/beam-app/panel-expand.svg';
import chevronIcon from '../../assets/beam-app/chevron.svg';
import searchIcon from '../../assets/beam-app/search.svg';
import searchClearIcon from '../../assets/beam-app/search-clear.svg';
import shortcutIcon from '../../assets/beam-app/shortcut.svg';
import folderIcon from '../../assets/beam-app/folder.svg';
import keyIcon from '../../assets/beam-app/key.svg';
import settingsIcon from '../../assets/beam-app/settings.svg';
import accountChevronIcon from '../../assets/beam-app/account-chevron.svg';
import avatarImage from '../../assets/beam-app/avatar.png';
import './beam-app-navigation.css';

const Icon = ({ src }: { src: string }) => <img src={src} alt="" className="beam-nav-icon" />;

export function NavigationButtonExample() {
  const [created, setCreated] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <NavigationButton
        label={created ? 'Folder added' : 'New folder'}
        leading={<img src={folderIcon} alt="" className="size-3" />}
        active={created}
        onClick={() => setCreated((value) => !value)}
        className="w-[200px]"
      />
      <p className="mt-2 text-center text-xs text-[rgb(var(--color-gray-800))]">
        {created ? 'Click to reset' : 'Default'}
      </p>
    </div>
  );
}

type Folder = { name: string; count: number };

function BeamAppSideNavigation({ initialCollapsed }: { initialCollapsed: boolean }) {
  const [collapsed, setCollapsed] = useState(initialCollapsed);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [active, setActive] = useState('Folder 001');
  const [folders, setFolders] = useState<Folder[]>([
    { name: 'Folder 001', count: 4 },
    { name: 'Product Resources', count: 3 },
    { name: 'Website Assets', count: 3 },
  ]);

  const addFolder = () => {
    const name = `New folder ${folders.length + 1}`;
    setFolders((items) => [...items, { name, count: 0 }]);
    setActive(name);
  };

  return (
    <div className="beam-nav-specimen">
      <aside className={`beam-nav-sidebar${collapsed ? ' beam-nav-collapsed' : ''}`}>
        <div className="beam-nav-top">
          <div className="beam-nav-workspace-row">
            <button className="beam-nav-workspace-name" type="button">
              <Icon src={personalIcon} />
              <span>Personal</span>
              <span className="beam-nav-chevron"><Icon src={chevronIcon} /></span>
            </button>
            <button
              className="beam-nav-icon-button beam-nav-toggle-button"
              type="button"
              onClick={() => setCollapsed((value) => !value)}
              aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <Icon src={collapsed ? panelExpandIcon : panelIcon} />
            </button>
          </div>

          <div className="beam-nav-actions">
            <label className={`beam-nav-search${searching ? ' beam-nav-searching' : ''}`}>
              <Icon src={searchIcon} />
              <input
                value={query}
                placeholder="Search all files"
                aria-label="Search all files"
                onFocus={() => setSearching(true)}
                onChange={(event) => setQuery(event.target.value)}
              />
              {searching ? (
                <button type="button" className="beam-nav-clear" aria-label="Clear search" onClick={() => { setQuery(''); setSearching(false); }}>
                  <Icon src={searchClearIcon} />
                </button>
              ) : <Icon src={shortcutIcon} />}
            </label>
            <button className="beam-nav-plain-button" type="button" aria-label="New folder" title={collapsed ? 'New folder' : undefined} onClick={addFolder}>
              <Icon src={folderIcon} /><span className="beam-nav-label">New folder</span>
            </button>
          </div>

          <nav className={`beam-nav-folder-list${collapsed || searching ? ' beam-nav-concealed' : ''}`} aria-label="Folders">
            {folders.map((folder) => (
              <button className={`beam-nav-folder-row${active === folder.name ? ' beam-nav-active' : ''}`} type="button" key={folder.name} onClick={() => setActive(folder.name)}>
                <span>{folder.name}</span><span>{folder.count}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="beam-nav-bottom">
          <div className="beam-nav-utility-links">
            <button className={`beam-nav-plain-button${active === 'API Keys' ? ' beam-nav-active' : ''}`} type="button" onClick={() => setActive('API Keys')} title={collapsed ? 'API Keys' : undefined}>
              <Icon src={keyIcon} /><span className="beam-nav-label">API Keys</span>
            </button>
            <button className={`beam-nav-plain-button${active === 'Settings' ? ' beam-nav-active' : ''}`} type="button" onClick={() => setActive('Settings')} title={collapsed ? 'Settings' : undefined}>
              <Icon src={settingsIcon} /><span className="beam-nav-label">Settings</span>
            </button>
          </div>
          <button className="beam-nav-account-row" type="button" aria-label="Michele J. account" title={collapsed ? 'Michele J.' : undefined}>
            <img className="beam-nav-avatar" src={avatarImage} alt="Michele J." />
            <span className="beam-nav-label">Michele J.</span>
            <span className="beam-nav-account-chevron"><Icon src={accountChevronIcon} /></span>
          </button>
        </div>
      </aside>
      <p className="beam-nav-caption">{collapsed ? 'Collapsed' : 'Expanded'}</p>
    </div>
  );
}

export function SideNavigationExample() {
  return (
    <div className="beam-nav-examples">
      <BeamAppSideNavigation initialCollapsed={false} />
      <BeamAppSideNavigation initialCollapsed />
    </div>
  );
}
