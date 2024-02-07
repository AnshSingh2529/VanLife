import React, { useEffect, useState } from 'react';
import { useParams,Link, Outlet, NavLink } from 'react-router-dom';

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

  const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
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
            <nav className="host-van-detail-nav">

             <NavLink 
             to="." 
             end 
             style={ ({isActive}) => isActive ? activeStyle : null}>Details</NavLink> 

             <NavLink 
             to="pricing" 
             style={ ({isActive}) => isActive ? activeStyle : null}>Pricing</NavLink>

             <NavLink 
             to="photos" 
             style={ ({isActive}) => isActive ? activeStyle : null}>Photos</NavLink>  

            </nav>
            <Outlet context={ {vandetail} }/>
        </div>
    </section>
   
)
}


export default HostVansDetail