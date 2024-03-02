import React from 'react'
import {useOutletContext} from 'react-router-dom';

function HostVanPhotos() {
  const {detailhostvans} = useOutletContext();
  return (
<img src={detailhostvans.imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhotos