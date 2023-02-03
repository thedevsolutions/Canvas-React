import './App.scss';
import 'boxicons/css/boxicons.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AppLayout from './components/layout/AppLayout';
import MainPage from './pages/MainPage.js';
import Code from './code';
import AllImages from './pages/AllImages';

function App() {
    return (
      // <Code />
      <BrowserRouter>
      <Routes>
         <Route index element={<MainPage  />} />
         <Route path='/images' element={<AllImages />} />
         
     </Routes>
  // </BrowserRouter>
            // <Routes>
            //     <Route path='/' element={<AppLayout />}>
            //         <Route index element={<Blank />} />
            //         <Route path='/started' element={<Blank />} />
            //         <Route path='/calendar' element={<Blank />} />
            //         <Route path='/user' element={<Blank />} />
            //         <Route path='/order' element={<Blank />} />
            //     </Route>
            // </Routes>
    );
}

export default App;