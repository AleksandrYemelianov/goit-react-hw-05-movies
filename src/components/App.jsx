import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SharedLayout from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home'
import Movies from 'pages/Movies/Movies';
import MoviesDetails from 'pages/MoviesDetails/MoviesDetails';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MoviesDetails />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
};
