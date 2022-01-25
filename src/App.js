import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GlobalStyles from './GlobalStyles';

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
