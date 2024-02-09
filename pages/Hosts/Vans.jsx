import React, { useState,useEffect } from "react"

import { Link } from "react-router-dom"
import getHostvans from '/van/api';

export default function HostVans() {
    const [vans, setHostVans] = React.useState([]);
    const [loader, setloader] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        setloader(true);
      async function HostLoader (){
       try {
        const data = await getHostvans();
        setHostVans(data);
       } catch (err) {
        setError(err)
       } finally {
        setloader(false);
       }
      }

      HostLoader();
    }, [])

    if(loader){
        return <div className="loader"></div>
    }
    if(error) {
        return <h1>Sorry! {error.message}</h1>
    }

    const hostVansEls = vans.map(van => (
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
        <section>
            <h1 className="host-vans-title">Your listed vans</h1>
            <div className="host-vans-list">
                        <section>
                            {hostVansEls}
                        </section>
                
            </div>
        </section>
    )
}