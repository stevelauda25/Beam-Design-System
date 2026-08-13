import { useState, type ComponentType } from 'react';
import { Activity, Badge, Breadcrumb, Button, Dialog, Dropdown, EditorToolbar, FileCard, Menu, MenuItem, NavigationButton, Select, SharePopover, Table, Tabs, TextInput, Toast, Tooltip } from '@beam/ui';
import folderIcon from '../../assets/beam-app/folder.svg';
import selectChevron from '../../assets/beam-app/api-chevron.svg';
import selectedCheck from '../../assets/beam-app/download-success.svg';
import moreIcon from '../../assets/beam-app/more.svg';
import documentIcon from '../../assets/beam-app/file-document.svg';
import closeIcon from '../../assets/beam-app/preview-close.svg';
import editorChevron from '../../assets/beam-app/editor-chevron.svg';
import editorBold from '../../assets/beam-app/editor-bold.svg';
import editorItalic from '../../assets/beam-app/editor-italic.svg';
import editorUnderline from '../../assets/beam-app/editor-underline.svg';
import editorDivider from '../../assets/beam-app/editor-divider.svg';
import editorList from '../../assets/beam-app/editor-list.svg';
import editorLink from '../../assets/beam-app/editor-link.svg';
import editorImage from '../../assets/beam-app/editor-image.svg';
import sharePointer from '../../assets/beam-app/share-tooltip.svg';
import shareDocument from '../../assets/beam-app/share-document.svg';
import sharePeople from '../../assets/beam-app/share-people.svg';
import shareChevron from '../../assets/beam-app/share-chevron.svg';
import jamesAvatar from '../../assets/beam-app/james-avatar.png';
import activityLine from '../../assets/beam-app/activity-line.svg';
import toastSuccess from '../../assets/beam-app/toast-success.svg';
import viewList from '../../assets/beam-app/view-list.svg';
import viewGrid from '../../assets/beam-app/view-grid.svg';

export function BreadcrumbExample() {
  return (
    <Breadcrumb
      items={[
        { label: 'Home', href: '#' },
        { label: 'Components', href: '#' },
        { label: 'Breadcrumb' },
      ]}
    />
  );
}

export function ButtonExample() {
  return (
    <Button leftIcon={<span className="block size-3 rounded-full border border-current" />}>Button</Button>
  );
}

export function DropdownExample() {
  const [value, setValue] = useState('');

  return (
    <Dropdown
      options={[
        { value: 'a', label: 'Option A' },
        { value: 'b', label: 'Option B' },
        { value: 'c', label: 'Option C' },
      ]}
      value={value}
      onChange={setValue}
      placeholder="Select…"
      className="w-44"
    />
  );
}

export function TextInputExample() {
  const [value, setValue] = useState('');

  return (
    <TextInput
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Placeholder"
      leading={<span className="block size-3 rounded-full border border-current" />}
      trailing={<span className="block size-3 rounded-full border border-current" />}
      containerClassName="w-44"
    />
  );
}

export function BadgeExample() {
  return <Badge variant="accent">Accent</Badge>;
}

export function SelectExample() {
  const [value, setValue] = useState('');
  return (
    <Select
      options={[{ value: 'one', label: 'Option one' }, { value: 'two', label: 'Option two' }]}
      value={value}
      onChange={setValue}
      placeholder="Select"
      chevron={<img src={selectChevron} alt="" />}
      selectedIndicator={<img src={selectedCheck} alt="" />}
      aria-label="Select example"
    />
  );
}

export function MenuExample() {
  const [selected, setSelected] = useState(false);
  return (
    <Menu>
      <MenuItem
        icon={<span className="block size-3 rounded-full border border-current" />}
        indicator={<span className="block size-3 rounded-full border border-current" />}
        visualState={selected ? 'selected' : 'default'}
        onClick={() => setSelected((current) => !current)}
      >
        Menu item
      </MenuItem>
    </Menu>
  );
}

export function TableExample() {
  return (
    <div className="w-fit origin-center scale-[0.8]">
      <Table
        className="w-[286px]"
        rows={[
          { name: 'Folder 001', size: '2.4KB', modified: '5 days', state: 'default' },
          { name: 'Website Assets', size: '856MB', modified: 'Yesterday', state: 'selected' },
        ]}
        actionIcon={<img src={moreIcon} alt="" />}
      />
    </div>
  );
}

export function FileCardExample() {
  const [selected, setSelected] = useState(false);
  return (
    <FileCard
      preview={<img src={documentIcon} alt="" />}
      name="document.md"
      visualState={selected ? 'selected' : 'default'}
      onClick={() => setSelected((current) => !current)}
    />
  );
}

export function DialogExample() {
  return (
    <div className="origin-center scale-[0.8]">
      <Dialog className="w-[300px]" title="Create new folder" closeIcon={<img src={closeIcon} alt=""/>} primaryIcon={<img src={folderIcon} alt=""/>} primaryLabel="Add folder">Folder name</Dialog>
    </div>
  );
}

export function PopoverExample() {
  return (
    <div className="origin-center scale-[0.8]">
      <SharePopover
        pointer={<img src={sharePointer} alt=""/>}
        documentIcon={<img src={shareDocument} alt=""/>}
        peopleIcon={<img src={sharePeople} alt=""/>}
        avatar={<img src={jamesAvatar} alt=""/>}
        footerIcon={<img src={shareChevron} alt=""/>}
      />
    </div>
  );
}

export function EditorToolbarExample() {
  const icons = { chevron:<img src={editorChevron} alt=""/>, bold:<img src={editorBold} alt=""/>, italic:<img src={editorItalic} alt=""/>, underline:<img src={editorUnderline} alt=""/>, divider:<img src={editorDivider} alt=""/>, list:<img src={editorList} alt=""/>, link:<img src={editorLink} alt=""/>, image:<img src={editorImage} alt=""/>, check:<img src={selectedCheck} alt=""/> };
  return <EditorToolbar icons={icons} />;
}

export function NavigationExample() {
  const [active, setActive] = useState(false);

  return (
    <NavigationButton
      label="New folder"
      leading={<img src={folderIcon} alt="" className="size-3" />}
      active={active}
      onClick={() => setActive((value) => !value)}
      className="w-40"
    />
  );
}

export function ActivityExample() {
  return <Activity className="w-[260px]" lineAsset={<img src={activityLine} alt="" />} items={[
    { person:'Michele J.', action:'Viewed', time:'2h ago', detail:'folder.md · /folder.md', state:'current' },
    { person:'Michele J.', action:'Viewed', time:'4h ago', detail:'folder.md · /folder.md', state:'completed' },
  ]} />;
}

export function TooltipExample() {
  return <div className="pt-10"><Tooltip content="Link-copied" variant="success" open><span className="block size-3 rounded-full border border-[rgb(var(--color-gray-975))]" /></Tooltip></div>;
}

export function ToastExample() {
  return <Toast variant="success" icon={<img src={toastSuccess} alt="" />} title="API key created" description="Production API was created successfully." />;
}

export function TabsExample() {
  return <Tabs value="grid" listIcon={<img src={viewList} alt="" />} gridIcon={<img src={viewGrid} alt="" />} />;
}

export const canonicalExamples: Record<string, ComponentType> = {
  '/components/button': ButtonExample,
  '/components/text-input': TextInputExample,
  '/components/select': SelectExample,
  '/components/menu': MenuExample,
  '/components/badge': BadgeExample,
  '/components/table': TableExample,
  '/components/file-card': FileCardExample,
  '/components/dialog': DialogExample,
  '/components/popover': PopoverExample,
  '/components/editor-toolbar': EditorToolbarExample,
  '/components/activity': ActivityExample,
  '/components/tooltip': TooltipExample,
  '/components/toast': ToastExample,
  '/components/navigation': NavigationExample,
  '/components/tabs': TabsExample,
};
