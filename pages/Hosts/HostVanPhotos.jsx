import React from 'react'
import {useOutletContext} from 'react-router-dom';

function HostVanPhotos() {
  const {vandetail} = useOutletContext();
  return (
<img src={vandetail.imageUrl} className="host-van-detail-image" />
  )
}

export default HostVanPhotos