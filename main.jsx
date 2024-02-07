import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server"; 
import VansPage from './van/vans_page';
import VansDetail from './van/vans_detail';
import Layout from './component/Layout';
import Dashboard from './pages/Hosts/DashBoard';
import Reviews from './pages/Hosts/Reviews';
import Income from './pages/Hosts/Income';
import HostLayout from './component/HostLayout';
import Vans from './pages/Hosts/Vans';
import HostVansDetail from './pages/Hosts/HostVansDetail';
import HostVanInfo from './pages/Hosts/HostVanInfo';
import HostVanPricing from './pages/Hosts/HostVanPricing';
import HostVanPhotos from './pages/Hosts/HostVanPhotos';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<VansPage />} />
        <Route path="vans/:id" element={<VansDetail />} />          //here "/:id" means something going to replace it some id,name,or anything.

        <Route path='host' element={<HostLayout />}>

          <Route index element={<Dashboard />}/>
          <Route path='income' element={<Income />}/>
          <Route path='reviews'  element={<Reviews />}/>
          <Route path='vans'  element={<Vans />}/>
          <Route path='vans/:id'  element={<HostVansDetail />}>
            <Route index element={<HostVanInfo />} />
            <Route path='pricing' element={<HostVanPricing/>} />
            <Route path='photos' element={<HostVanPhotos />} />
          </Route>

        </Route>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);