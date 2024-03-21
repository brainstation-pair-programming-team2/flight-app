import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Status from './pages/Status/Status';
import Airlines from './pages/Airlines/Airlines';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path="/status" element={<Status />}/>
          <Route path="/airlines" element={<Airlines />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
