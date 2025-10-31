import { Router } from './Router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'jotai';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider>
    <QueryClientProvider client={queryClient}>
        <Router />
    </QueryClientProvider>
    </Provider>
  );
}