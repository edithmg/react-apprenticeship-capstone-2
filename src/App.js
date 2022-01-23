import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import GlobalStyles from './GlobalStyles';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
