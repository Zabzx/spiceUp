import { MenuProvider } from './context/MenuContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <MenuProvider>
      <Navbar/>
      <Sidebar/>
      </MenuProvider>
    </div>
  );
}

export default App;
