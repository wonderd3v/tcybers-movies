import { FavoriteProvider } from './context/Favorites/FavoritesProvider';
import { Layout } from './pages/Shared/Layout';
import { Navbar } from './pages/Shared/Navbar';
import { Router } from './router/Router';

const App = () => {
  return (
    <FavoriteProvider>
      <Layout>
        <Navbar />
        <Router />
      </Layout>
    </FavoriteProvider>
  );
};

export default App;
