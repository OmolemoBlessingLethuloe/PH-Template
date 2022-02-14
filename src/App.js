import './App.css';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter, Routes,Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/searchPage" element={<SearchPage />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
