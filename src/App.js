import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search';
import Status from './pages/Status/Status';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
          <Route path='/status' element={<Status />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
