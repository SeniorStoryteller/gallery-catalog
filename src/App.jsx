import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Artists from './pages/Artists';
import ArtistDetail from './pages/ArtistDetail';
import ArtworkDetail from './pages/ArtworkDetail';
import ArtistProfile from './pages/ArtistProfile';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/artists/:id/profile" element={<ArtistProfile />} />
        <Route path="/artwork/:id" element={<ArtworkDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
