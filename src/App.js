import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
