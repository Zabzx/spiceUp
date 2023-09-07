import Navigation from "./Components/Navigation"
import Home from "./Components/Home"
import Categories from "./Components/Categories"
import { Routes, Route } from "react-router-dom"
import Region from "./Components/Region"
import Random from "./Components/Random"
import Favorites from "./Components/Favorites"
import SearchResults from "./Components/SearchResults"
import "./css/main.css"

function App() {

  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/region" element={<Region />} />
      <Route path="random" element={<Random />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="/search/:type/:query" element={<SearchResults />} />
    </Routes>
    </>
  )
}

export default App
