import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server"; 
import VansPage from './pages/vans_page';
import VansDetail from './pages/vans_detail';
import Layout from './component/Layout';
import Host from './Hosts/Host';
import Dashboard from './Hosts/DashBoard';
import Reviews from './Hosts/Reviews';
import Income from './Hosts/Income';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<VansPage />} />
        <Route path="/vans/:id" element={<VansDetail />} />          //here "/:id" means something going to replace it some id,name,or anything.
        <Route path='/host/dashboard' element={<Dashboard />}/>
        <Route path='/host/reviews' element={<Reviews />}/>
        <Route path='/host/income' element={<Income />}/>
            

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);