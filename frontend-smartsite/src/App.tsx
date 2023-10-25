import CardList from './components/CardList';
import Forms from './components/Forms';
import Header from './components/Header';
import Legend from './components/Legend';
import { QueryClient, QueryClientProvider } from 'react-query';
import Footer from './components/Footer';

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
      <Footer />
    </QueryClientProvider>
  )
}

export default App
