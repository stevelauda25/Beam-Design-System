import { useLocation } from 'react-router-dom';
import { BeamCatalogExample, catalog } from './BeamCatalogExample.js';

export function BeamCatalogPage() {
  const { pathname } = useLocation();
  const item = catalog[pathname] ?? catalog['/components/menu']!;
  return <><PageHeaderShim title={item.title} description={item.description}/><h2 id="states">States</h2><p>{item.states.join(', ')}</p><div className="preview-card my-6 rounded-lg border border-default bg-canvas"><div className="flex min-h-[220px] items-center justify-center p-8"><BeamCatalogExample kind={item.kind}/></div></div></>;
}

function PageHeaderShim({title,description}:{title:string;description:string}){return <header className="page-header"><h1>{title}</h1><p>{description}</p></header>}
