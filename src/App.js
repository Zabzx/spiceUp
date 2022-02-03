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
import { SearchProvider } from './context/SearchedContext';
import {  SearchValueProvider } from './context/SearchValue';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <SearchProvider>
      <SearchValueProvider>
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
        <Route path="/about" element={<About/>}></Route>
      </Routes>
      </FavAlertProvider>
      </FavoriteDishProvider>
      </DishProvider>
      </LoadingProvider>
      </MenuProvider>
      </SearchValueProvider>
      </SearchProvider>
    </div>
  );
}

export default App;
