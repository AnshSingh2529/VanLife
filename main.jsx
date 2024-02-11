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
{loader as Vansloader} from './van/vans_page';
import VansDetail,{loader as getVanLoader} from './van/vans_detail';
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
import NotFound_page from './van/NotFound_page';
import Error from './component/Error';                                                          
import Login from './pages/Login';

const router = createBrowserRouter(createRoutesFromElements (
  <Route path="/" element={<Layout />}>

  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="login" element={<Login />} />
  <Route 
  path="vans" 
  element={<VansPage />} 
  loader={Vansloader} 
  errorElement={<Error />}
  />
  <Route
  path="vans/:id" 
  element={<VansDetail />}
  loader={getVanLoader}
   />          //here "/:id" means something going to replace it some id,name,or anything.

  <Route path='host' element={<HostLayout />}>

    <Route 
    index 
    element={<Dashboard />}
    loader={ async () => {
      const isLoggedIn = false;
      if(!isLoggedIn) {
        throw redirect ("/login")
      }
      return <Outlet />
    }}
    />
    <Route 
    path='income' 
    element={<Income />}
    loader={ async () => {
      const isLoggedIn = false;
      if(!isLoggedIn) {
        throw redirect ("/login")
      }
      return <Outlet />
    }}
    />
    <Route 
    path='reviews' 
     element={<Reviews />}
     loader={ async () => {
      const isLoggedIn = false;
      if(!isLoggedIn) {
        throw redirect ("/login")
      }
      return <Outlet />
     }}
     />
    <Route 
    path='vans' 
     element={<Vans />}
     loader={ async () => {
      const isLoggedIn = false;
      if(!isLoggedIn) {
        throw redirect ("/login")
      }
      return <Outlet />
     }}
     />
    <Route 
    path='vans/:id'  
    element={<HostVansDetail />}
    loader={ async () => {
      const isLoggedIn = false;
      if(!isLoggedIn) {
        throw redirect ("/login")
      }
      return <Outlet />
    }}
    >
      <Route 
      index e
      lement={<HostVanInfo />} 
      loader={ async () => {
        const isLoggedIn = false;
        if(!isLoggedIn) {
          throw redirect ("/login")
        }
        return <Outlet />
      }}
      />
      <Route 
      path='pricing'
       element={<HostVanPricing/>} 
       loader={ async () => {
        const isLoggedIn = false;
        if(!isLoggedIn) {
          throw redirect ("/login")
        }
        return <Outlet />
       }}
       />
      <Route 
      path='photos' 
      element={<HostVanPhotos />} 
      loader={ async () => {
        const isLoggedIn = false;
        if(!isLoggedIn) {
          throw redirect ("/login")
        }
        return <Outlet />
      }}
      />
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