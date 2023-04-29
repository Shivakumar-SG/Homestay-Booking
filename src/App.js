import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Homestay1 from './components/homestay1/Homestay1';
import Admin from './components/admin/Admin';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePageCKM from './components/home/homepage-Ckm/HomepageCkm';
import HomePageSKL from './components/home/homepage-SKL/HomepageSKL';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage-Ckm" element={<HomePageCKM />} />
          <Route path="/homepage-SKL" element={<HomePageSKL />} />
          <Route path="/homestay1" element={<Homestay1 />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
