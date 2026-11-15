import { renderToString } from 'react-dom/server';
import { Page, ROUTES, NOT_FOUND } from './pages';
export { ROUTES, NOT_FOUND };
export const render = (path: string) => renderToString(<Page path={path} />);
