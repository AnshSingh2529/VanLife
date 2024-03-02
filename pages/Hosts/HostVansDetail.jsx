import React,{Suspense} from 'react';
import { Link, Outlet, NavLink, useLoaderData,defer,Await } from 'react-router-dom';
import { getHostVans } from '../../van/api';
import { requireAuth } from '../../van/utils';
import {Loading} from '../../van/Loading';

export async function loader ({params,request}) {
    await requireAuth(request);
    return defer({detailhostvans: getHostVans(params.id)})
}
function HostVansDetail() {
    const vandetailLoader = useLoaderData();

    function renderhostvanDetail(detailhostvans){
        return(
            <>
            <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
                <img src={detailhostvans.imageUrl} />
                <div className="host-van-detail-info-text">
                    <i
                        className={`van-type van-type-${detailhostvans.type}`}
                    >
                        {detailhostvans.type}
                    </i>
                    <h3>{detailhostvans.name}</h3>
                    <h4>${detailhostvans.price}/day</h4>
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
            <Outlet context={ {detailhostvans} }/>
        </div>
            </>
        )
    }
    
    
                                                                    //   useEffect( () => {
                                                                    //     fetch(`/api/host/vans/${params.id}`)
                                                                    //     .then(res => res.json())
                                                                    //     .then(data => UpdatevanDetail(data.vans));
                                                                    //   },[])

                                                                //   if(!vandetail){
                                                                //     return <h1>Loading...</h1>
                                                                //   }

  const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
  }

  return (
    <section>
        <Link
                to="../vans"
                // relative='path'         no need if you want direct to visit your main nested parent.
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <Suspense fallback={<Loading />}>
                <Await resolve={vandetailLoader.detailhostvans}>
                {renderhostvanDetail}
                </Await>
            </Suspense>
    </section>
   
)
}


export default HostVansDetail