import { MenuProvider } from './context/MenuContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';
import { LoadingProvider } from './context/LoadingContext';
import { DishProvider } from './context/DishContext';
import { FavoriteDishProvider } from './context/FavoritesContext';
import { FavAlertProvider } from './context/FavAlertContext';
import FavDishes from './pages/FavDishes';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <MenuProvider>
      <LoadingProvider>
      <DishProvider>
      <FavoriteDishProvider>
      <Navbar/>
      <Sidebar/>
      <FavAlertProvider>
      <Featured/>
      </FavAlertProvider>
      </FavoriteDishProvider>
      </DishProvider>
      </LoadingProvider>
      </MenuProvider>
      <Routes>
      <Route path="favorites" element={<FavDishes/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
