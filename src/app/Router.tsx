import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export function Router() {
  return <RouterProvider router={router} />;
}