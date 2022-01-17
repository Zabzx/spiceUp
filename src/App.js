import { MenuProvider } from './context/MenuContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Featured from './components/Featured';

function App() {
  return (
    <div className="App">
      <MenuProvider>
      <Navbar/>
      <Sidebar/>
      <Featured/>
      </MenuProvider>
    </div>
  );
}

export default App;
