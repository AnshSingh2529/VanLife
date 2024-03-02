import React, { Suspense } from "react"
import {
    Link, 
    useLocation, 
    useLoaderData,
    Await,
    defer
 } from "react-router-dom"
import getVanDetails from './api';
import { requireAuth } from "./utils";
import { Loading } from "./Loading";


export async function loader ({params,request}){
    await requireAuth(request);
    return defer({VanDetailPromise: getVanDetails(params.id)})
}
export default function VanDetail() {
    const location = useLocation()
    // console.log(location)
    
    const vanDetailLoader = useLoaderData();

    // React.useEffect(() => {
    //     fetch(`/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans))
    // }, [params.id])

    const search = location.state?.search || ""
    const type = location.state?.type || "all"
    
    function renderVanDetail(VanDetailPromise){
       return(
        <>
         {VanDetailPromise ? (
            <div className="van-detail">
                <img src={VanDetailPromise.imageUrl} />
                <i className={`van-type ${VanDetailPromise.type} selected`}>
                    {VanDetailPromise.type}
                </i>
                <h2>{VanDetailPromise.name}</h2>
                <p className="van-price"><span>${VanDetailPromise.price}</span>/day</p>
                <p>{VanDetailPromise.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
        </>
       )
    }
    return (
        <div className="van-detail-container">
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>

           <Suspense fallback={<Loading />}>

           <Await resolve={vanDetailLoader.VanDetailPromise}>
                {renderVanDetail}
           </Await>
           </Suspense>
            
        </div>
    )
}