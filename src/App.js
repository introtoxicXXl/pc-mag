import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Dashboard from './components/Dashboard/Dashboard';
import Blogs from './components/Blogs/Blogs';
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/review' element={<Review/>}></Route>
       <Route path='/dashboard' element={<Dashboard/>}></Route>
       <Route path='/blogs' element={<Blogs/>}></Route>
       <Route path='*' element={<PageNotFound/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
