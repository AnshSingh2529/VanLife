import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,  
  Route, 
  RouterProvider 
      } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import "./server"; 
import Vanspage, { loader } from './van/vans_page';
import VansDetail,{loader as getVanDetailLoader} from './van/vans_detail';
import Layout from './component/Layout';
import Dashboard ,{loader as dashboardloader}from './pages/Hosts/DashBoard';
import Reviews from './pages/Hosts/Reviews';
import Income from './pages/Hosts/Income';
import HostLayout from './component/HostLayout';
import HostVans,{loader as HostVansLoader} from './pages/Hosts/HostVans';
import HostVansDetail,{loader as HostVanDetailLoader} from './pages/Hosts/HostVansDetail';
import HostVanInfo from './pages/Hosts/HostVanInfo';
import HostVanPricing from './pages/Hosts/HostVanPricing';
import HostVanPhotos from './pages/Hosts/HostVanPhotos';
import NotFound_page from './van/NotFound_page';
import Error from './component/Error';                                                          
import Login,{loader as loginLoader, action as loginAction} from './pages/Login';
import { requireAuth } from './van/utils';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route
      path="login"
      element={<Login />}
      loader={loginLoader}
      action={loginAction}
    />
    <Route
      path="vans"
      element={<Vanspage />}
      errorElement={<Error />}
      loader={loader}
    />
    <Route 
      path="vans/:id" 
      element={<VansDetail />} 
      errorElement={<Error />}
      loader={getVanDetailLoader}
    />

    <Route path="host" element={<HostLayout />}>
      <Route
        index
        element={<Dashboard />}
        loader={dashboardloader}
      />
      <Route
        path="income"
        element={<Income />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="reviews"
        element={<Reviews />}
        loader={async ({ request }) => await requireAuth(request)}
      />
      <Route
        path="vans"
        element={<HostVans />}
        errorElement={<Error />}
        loader={HostVansLoader}
      />
      <Route
        path="vans/:id"
        element={<HostVansDetail />}
        errorElement={<Error />}
        loader={HostVanDetailLoader}
      >
        <Route
          index
          element={<HostVanInfo />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="pricing"
          element={<HostVanPricing />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="photos"
          element={<HostVanPhotos />}
          loader={async ({ request }) => await requireAuth(request)}
        />
      </Route>
    </Route>
    <Route path="*" element={<NotFound_page />} />
  </Route>
))

function App() {
  return (
    <RouterProvider router={router} />
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);