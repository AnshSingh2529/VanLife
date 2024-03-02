import React from 'react';
import { useOutletContext } from 'react-router-dom';

export default function HostVanPricing() {
  const {detailhostvans} = useOutletContext();
  return (
    <h3 className="host-van-price">${detailhostvans.price}<span>/day</span></h3>
  )
}

