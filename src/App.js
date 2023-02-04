import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage.js';
import AllImages from './pages/AllImages';
import './App.css';

function App() {
  // routes of the application
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='/images' element={<AllImages />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;