import { createRoot, hydrateRoot } from 'react-dom/client';
import { Page } from './pages';
import './index.css';

// Eski linkler: #gizlilik vb. artik ayri sayfa
const OLD: Record<string, string> = { '#gizlilik': '/gizlilik', '#kullanim-kosullari': '/kullanim-kosullari', '#kosullar': '/kullanim-kosullari', '#hakkimizda': '/hakkimizda', '#iletisim-destek': '/iletisim', '#destek': '/iletisim' };
const to = OLD[window.location.hash];
if (to) window.location.replace(to);

const el = document.getElementById('root')!;
const app = <Page path={window.location.pathname} />;
if (el.hasChildNodes()) hydrateRoot(el, app); else createRoot(el).render(app);
