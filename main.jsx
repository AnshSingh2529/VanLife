import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements, 
  redirect, 
  Route, 
  RouterProvider 
      } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import "./server"; 
import 
VansPage, 
{loader as VansPageloader} from './van/vans_page';
import VansDetail,{loader as getVanDetailLoader} from './van/vans_detail';
import Layout from './component/Layout';
import Dashboard from './pages/Hosts/DashBoard';
import Reviews from './pages/Hosts/Reviews';
import Income from './pages/Hosts/Income';
import HostLayout from './component/HostLayout';
import Vans,{loader as HostVansLoader} from './pages/Hosts/HostVans';
import HostVansDetail,{loader as HostVanDetailLoader} from './pages/Hosts/HostVansDetail';
import HostVanInfo from './pages/Hosts/HostVanInfo';
import HostVanPricing from './pages/Hosts/HostVanPricing';
import HostVanPhotos from './pages/Hosts/HostVanPhotos';
import NotFound_page from './van/NotFound_page';
import Error from './component/Error';                                                          
import Login from './pages/Login';
import { requireAuth } from './van/utils';

const router = createBrowserRouter(createRoutesFromElements (
  <Route path="/" element={<Layout />}>

  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="login" element={<Login />} />
  <Route 
  path="vans" 
  element={<VansPage />} 
  loader={VansPageloader} 
  errorElement={<Error />}
  />
  <Route
  path="vans/:id" 
  element={<VansDetail />}
  loader={getVanDetailLoader}
   />          //here "/:id" means something going to replace it some id,name,or anything.

  <Route path='host' element={<HostLayout />}>

    <Route 
    index 
    element={<Dashboard />}
    loader={async () => await requireAuth()}    />
    <Route 
    path='income' 
    element={<Income />}
    loader={async () => await requireAuth()}    />
    <Route 
    path='reviews' 
     element={<Reviews />}
     loader={async () => await requireAuth()}
     />
    <Route 
    path='vans' 
     element={<Vans />}
     loader={HostVansLoader}
     />
    <Route 
    path='vans/:id'  
    element={<HostVansDetail />}
    loader={ HostVanDetailLoader}
    >
      <Route 
      index e
      lement={<HostVanInfo />} 
      loader={async () => await requireAuth()}      />
      <Route 
      path='pricing'
       element={<HostVanPricing/>} 
       loader={async () => await requireAuth()}       />
      <Route 
      path='photos' 
      element={<HostVanPhotos />} 
      loader={async () => await requireAuth()}      />
    </Route>
  </Route>
  <Route path='*' element={<NotFound_page />} />
  </Route>  
))

function App() {
  return (
  <>
  <RouterProvider router = {router} />
  </>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);