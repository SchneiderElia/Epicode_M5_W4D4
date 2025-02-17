import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

///////////////  NEW  redefine for rout  //////////////////////////////////////////////////////////////////////////////

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import BooksDetails from './pages/BooksDetails'
import NotFound from './pages/NotFound.jsx'
import AboutUs from './pages/AboutUs.jsx'

import Mynav from './components/MyNav.jsx'
import MyFooter from './components/MyFooter.jsx'

///////////////  NEW  redefine for rout  //////////////////////////////////////////////////////////////////////////////


function App() {
  return (
    <BrowserRouter>
      <Mynav />
      <main className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path="/books/:asin" element={<BooksDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <MyFooter />
    </BrowserRouter>
  );
}
export default App;
