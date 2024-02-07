import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const {vandetail} = useOutletContext();
  return (
    <h3 className="host-van-price">${vandetail.price}<span>/day</span></h3>
  )
}

