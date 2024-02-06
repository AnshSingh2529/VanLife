import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom';

function HostVansDetail() {
  const [vandetail, UpdatevanDetail] = useState(null);
  const params = useParams();
  useEffect( () => {
    fetch(`/api/host/vans/${params.id}`)
    .then(res => res.json())
    .then(data => UpdatevanDetail(data.vans));
  },[])

  if(!vandetail){
    return <h1>Loading...</h1>
  }

  return (
    <section>
        <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
        <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={vandetail.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${vandetail.type}`}
                    >
                        {vandetail.type}
                    </i>
                    <h3>{vandetail.name}</h3>
                    <h4>${vandetail.price}/day</h4>
                </div>
            </div>
        </div>
        <div>
        <Link to="/vans/{params.id}/pricing">Pricing</Link>
        <Link to="/vans/{params.id}/photos">Photos</Link>
        <Link to="/vans/{params.id}/info">Info</Link>
        </div>
    </section>
   
)
}


export default HostVansDetail