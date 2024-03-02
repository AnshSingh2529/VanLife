import React,{Suspense} from "react"
import { requireAuth } from "../../van/utils";
import { 
    Link, 
    useLoaderData,
    defer,
    Await
} from "react-router-dom"
import getHostvans from '../../van/api';
import { Loading } from "../../van/Loading";


export async function loader ({request}) {
    await requireAuth(request);
    return defer({hostvan: getHostvans()})
}

export default function HostVans() {
    let vansLoader = useLoaderData();

function renderhostvans(hostvan){
    const hostVansEls = hostvan.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))
            return (
                <>
                <div className="host-vans-list">
                        <section>
                            {hostVansEls}
                        </section>
                </div>
                </>
            )
}

    return (
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
    
            <Suspense fallback={<Loading />}>

            <Await resolve={vansLoader.hostvan}>
            {renderhostvans}
            </Await>

            </Suspense>
            
        </section>
    )
}