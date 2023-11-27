import {  Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home';
import GalleryPage from './Pages/Gallery';
import ShortcodesPage from './Pages/Shortcodes';
import AboutPage from './Pages/About';
import LanguagePage from './Pages/Languages';
import Layout from './Layout/MainLayout';
import PageMarkup from './components/PageMarkup';
import Contact from './components/Contact';
import PageImage from './components/PageImage';
import Clearing from './components/ClearingFloats';
import Comments from './components/Comments';
import PageWithDisabled from './components/PageWithDisabled';

function App() {
  return (
    
    <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<HomePage/>}/>
      <Route path='/gallery' element={<GalleryPage/>}/>
      <Route path='/shortcodes' element={<ShortcodesPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/language' element={<LanguagePage/>}/>
      <Route path='/markup' element={<PageMarkup/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/image' element={<PageImage/>}/>
      <Route path='/clearing' element={<Clearing/>}/>
      <Route path='/comments' element={<Comments/>}/>
      <Route path='/disabled' element={<PageWithDisabled/>}/>
      </Route>
    </Routes>
  
  );
}

export default App;
