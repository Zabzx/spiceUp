import { MenuProvider } from './context/MenuContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import { LoadingProvider } from './context/LoadingContext';
import { DishProvider } from './context/DishContext';
import { FavoriteDishProvider } from './context/FavoritesContext';
import { FavAlertProvider } from './context/FavAlertContext';
import FavDishes from './pages/FavDishes';
import { Route, Routes, useHistory } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <MenuProvider>
      <LoadingProvider>
      <DishProvider>
      <FavoriteDishProvider>
      <Navbar/>
      <Sidebar/>
      <FavAlertProvider>
      <Routes>
        <Route path="/" element={<Featured/>}></Route>
        <Route path="/favorites" element={<FavDishes/>}></Route>
      </Routes>
      </FavAlertProvider>
      </FavoriteDishProvider>
      </DishProvider>
      </LoadingProvider>
      </MenuProvider>
    </div>
  );
}

export default App;
