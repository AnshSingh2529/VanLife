import { Link, Outlet, NavLink, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../van/api';
import { requireAuth } from '../../van/utils';

export async function loader ({params,request}) {
    await requireAuth(request);
    return getHostVans(params.id);
}
function HostVansDetail() {
    const vandetail = useLoaderData();
    
    
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