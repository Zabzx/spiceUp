import { MenuProvider } from './context/MenuContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import { LoadingProvider } from './context/LoadingContext';
import { DishProvider } from './context/DishContext';
import { FavoriteDishProvider } from './context/FavoritesContext';

function App() {
  return (
    <div className="App">
      <MenuProvider>
      <LoadingProvider>
      <DishProvider>
      <FavoriteDishProvider>
      <Navbar/>
      <Sidebar/>
      <Featured/>
      </FavoriteDishProvider>
      </DishProvider>
      </LoadingProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
