import CardList from './components/CardList';
import Forms from './components/Forms';
import Header from './components/Header';
import Legend from './components/Legend';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Forms />
      <Legend />
      <CardList />
    </QueryClientProvider>
  )
}

export default App
