import { useState } from 'react';
import more from '../../assets/beam-app/more.svg';
import folder from '../../assets/beam-app/folder.svg';
import fileDocument from '../../assets/beam-app/file-document.svg';
import emptyFiles from '../../assets/beam-app/empty-files.svg';
import close from '../../assets/beam-app/preview-close.svg';
import info from '../../assets/beam-app/preview-info.svg';
import copy from '../../assets/beam-app/preview-copy.svg';
import share from '../../assets/beam-app/preview-share.svg';
import download from '../../assets/beam-app/preview-download.svg';
import bold from '../../assets/beam-app/editor-bold.svg';
import italic from '../../assets/beam-app/editor-italic.svg';
import underline from '../../assets/beam-app/editor-underline.svg';
import activityLine from '../../assets/beam-app/activity-line.svg';
import success from '../../assets/beam-app/toast-success.svg';
import avatar from '../../assets/beam-app/avatar.png';
import james from '../../assets/beam-app/james-avatar.png';
import './beam-catalog.css';

type Kind='select'|'menu'|'badge'|'table'|'file'|'empty'|'dialog'|'preview'|'popover'|'editor'|'activity'|'tooltip'|'toast';
export const catalog:Record<string,{kind:Kind;title:string;description:string;states:string[]}>=Object.fromEntries([
 ['select','Select','Single selection control from Beam-App-Project',['Default','Hover','Focused','Open','Selected','Disabled']],['menu','Menu','Compact action menu with icon and label',['Default','Hover','Pressed','Selected','Disabled']],['badge','Badge','Compact semantic label',['Neutral','Accent','Success','Warning','Error','Info']],['table','Table','File-style data table',['Default','Hover','Selected','Disabled']],['file-card','File Card','Grid file item',['Default','Hover','Pressed','Selected','Disabled']],['empty-state','Empty State','Illustration, message, and action',['Workspace','Folder']],['dialog','Dialog','Focused task surface',['Default','Filled','Action disabled']],['file-preview','File Preview','File metadata, actions, and content',['Loading','Ready','Unavailable']],['popover','Popover','People and permission popover',['Closed','Open','Hovered item','Selected item']],['editor-toolbar','Editor Toolbar','Text formatting controls',['Default','Hover','Pressed','Selected','Menu open']],['activity','Activity','File event timeline',['Default','Current','Completed']],['tooltip','Tooltip','Short contextual feedback',['Default','Success','Error']],['toast','Toast','Temporary application feedback',['Neutral','Success','Error']]
].map(([slug,title,description,states])=>[`/components/${slug}`,{kind:(slug==='file-card'?'file':slug==='empty-state'?'empty':slug==='file-preview'?'preview':slug==='editor-toolbar'?'editor':slug) as Kind,title,description,states:states as string[]}])) as typeof catalog;
const I=({src}:{src:string})=><img src={src} alt=""/>;
export function BeamCatalogExample({kind}:{kind:Kind}){const [active,setActive]=useState(false);const [open,setOpen]=useState(true);
 if(kind==='select')return <div className="bc-select"><button onClick={()=>setOpen(!open)}>All workspaces <span>⌄</span></button>{open&&<div><button>All workspaces</button><button>Marketing ws</button><button>Docs workspace</button></div>}</div>;
 if(kind==='menu')return <div className="bc-menu"><button><I src={info}/>Open</button><button className="active"><I src={copy}/>Copy link</button><button><I src={download}/>Download</button></div>;
 if(kind==='badge')return <div className="bc-badges">{['Neutral','Accent','Success','Warning','Error','Info'].map(x=><span className={x.toLowerCase()} key={x}>{x}</span>)}</div>;
 if(kind==='table')return <div className="bc-table"><div className="head"><span>Name</span><span>Size</span><span>Modified</span><span/></div>{['Folder 001','Product Resources','Website Assets'].map((x,i)=><button className={active&&i===0?'selected':''} onClick={()=>setActive(i===0)} key={x}><span>{x}</span><span>{i?'856MB':'2.4KB'}</span><span>5 days ago</span><I src={more}/></button>)}</div>;
 if(kind==='file')return <button className={`bc-file ${active?'selected':''}`} onClick={()=>setActive(!active)}><I src={fileDocument}/><span>backup-prompt.md</span></button>;
 if(kind==='empty')return <div className="bc-empty"><I src={emptyFiles}/><h3>No files yet</h3><p>This folder is empty. Upload a file to get started.</p><button><I src={folder}/>Upload file</button></div>;
 if(kind==='dialog')return <div className="bc-dialog"><header>Create new folder <button><I src={close}/>Close</button></header><section><label>Folder name <button disabled={!active}>Add folder</button></label><input onChange={e=>setActive(!!e.target.value)} placeholder="Untitled folder"/></section></div>;
 if(kind==='preview')return <div className="bc-preview"><header>backup-prompt.md <button><I src={close}/>Close</button></header><nav><span>md　869 B　4 days ago</span><button><I src={info}/>Info</button><button><I src={copy}/>Copy</button><button><I src={share}/>Share</button><button><I src={download}/>Download</button></nav><article><h3>Backup prompt</h3><p>Keep important project instructions in one reusable document.</p></article></div>;
 if(kind==='popover')return <div className="bc-popover"><header>People with access <span>2 people</span></header><p><img src={avatar}/><span>Michele J.</span><b>Owner</b></p><p><img src={james}/><span>James W.</span><b>Editor</b></p><footer>Editor <button>Copy link</button></footer></div>;
 if(kind==='editor')return <div className="bc-editor"><button>Body　⌄</button>{[bold,italic,underline].map(x=><button className={active?'active':''} onClick={()=>setActive(!active)} key={x}><I src={x}/></button>)}</div>;
 if(kind==='activity')return <div className="bc-activity">{['Uploaded file','Shared link','Downloaded'].map((x,i)=><div key={x}><span><i/>{i<2&&<I src={activityLine}/>}</span><p>{x}<b>Created</b><time>{i+1}h ago</time><small>backup-prompt.md</small></p></div>)}</div>;
 if(kind==='tooltip')return <div className="bc-tooltips"><span>Default</span><span className="success">Link copied</span><span className="error">Copy failed</span></div>;
 return <div className="bc-toasts"><div>ⓘ <p><b>File downloaded</b><span>backup-prompt.md was downloaded.</span></p></div><div className="success"><I src={success}/><p><b>API key created</b><span>Production API was created successfully.</span></p></div><div className="error">× <p><b>Download failed</b><span>The file could not be downloaded.</span></p></div></div>}
