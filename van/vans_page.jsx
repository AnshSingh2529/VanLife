import React from "react";
import { Await, Link, defer, useLoaderData, useSearchParams } from "react-router-dom";
import getVans from './api';
import { requireAuth } from "./utils";

export async function loader({request}){
    await requireAuth(request)
    return defer({vans: await getVans()});
}
export default function VansPage (){
    const DataPromsise = useLoaderData();   
    const [searchParams,setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get("type");

    

    // useEffect(() => {
    //     async function loadVans() {
    //         setLoading(true)
    //         try {
    //             const data = await getVans()
    //             setVans(data)
    //         } catch (err) {
    //             setError(err)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     loadVans()
    // }, [])

   

    // function generatevanPath (key, value) {
    //     const sp = new URLSearchParams(searchParams);

    //     if(value === null){
    //         sp.delete(key)
    //     } else {
    //         sp.set(key, value);
    //     }
    //     return `?${sp.toString()}`
    // }

    function HandleFilter (key, value){
        setSearchParams( (prevParams) => {
            if(value === null){
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            }
        })
    }

    function renderVansElement(vans){
        const displayVans = typeFilter
        ? vans.filter(van => van.type === typeFilter) 
        : vans;

        const vanElements = displayVans.map( van => (
            <div key={van.id} className="van-tile">
                <Link 
    
                to={van.id}   state={ {search : `?${searchParams.toString()}`, type: typeFilter} }
                aria-label={`view detail for ${van.name} price at ${van.price} per day` 
    
                }>
                    <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
                    <div className="van-info">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
            </div>
        ))
        return(
            <>
        <div className="van-list-filter-buttons">
        <button className={`van-type simple ${typeFilter === "simple" ? "selected" : "" }`}  onClick={ () => HandleFilter("type", "simple")}>Simple</button>
        <button  className={`van-type rugged ${typeFilter === "rugged" ? "selected" : "" }`} onClick={ () => HandleFilter("type", "rugged")}>Rugged</button>
        <button  className={`van-type luxury ${typeFilter === "luxury" ? "selected" : "" }`}  onClick={ () => HandleFilter("type", "luxury")}>Luxury</button>
        { typeFilter ?
            (<button   onClick={ () => HandleFilter("type", null)}>Clear</button>)
        : null}
    </div>
        <div className="van-list">
        {vanElements}
    </div>


    {/* <div className="van-list-filter-buttons">
        <Link 
            to={generatevanPath ("type", "simple")}
            className={`van-type simple ${typeFilter === "simple" ? "selected" : ""}`}
        >Simple</Link>
        <Link 
            to={generatevanPath ("type", "luxury")}
            className={`van-type luxury ${typeFilter === "luxury" ? "selected" : ""}`}
        >Luxury</Link>
        <Link 
            to={generatevanPath ("type", "rugged")}
            className={`van-type rugged ${typeFilter === "rugged" ? "selected" : ""}`}
        >Rugged</Link>
       { typeFilter ?
       (<Link 
            to="."
            className="van-type clear-filters"
        >Clear filter</Link>)
    : null }
    </div> */}


    {/* <div className="van-list-filter-buttons">
        <Link 
            to="?type=simple"
            className="van-type simple"
        >Simple</Link>
        <Link 
            to="?type=luxury"
            className="van-type luxury"
        >Luxury</Link>  
        <Link 
            to="?type=rugged"
            className="van-type rugged"
        >Rugged</Link>
        <Link 
            to="."
            className="van-type clear-filters"
        >Clear filter</Link>
    </div> */}
    
    {/* <div className="van-list-filter-buttons">
        <button className="van-type simple"  onClick={ () => setSearchParams({type:"simple"})}>Simple</button>
        <button  className="van-type rugged" onClick={ () => setSearchParams({type:"rugged"})}>Rugged</button>
        <button  className="van-type luxury"  onClick={ () => setSearchParams({type:"luxury"})}>Luxury</button>
        <button   onClick={ () => setSearchParams({})}>Clear</button>
    </div> */}

    </>
        )
    }
    

   

    return (
        <div className="van-list-container">
            <h1>Explore our Vans options</h1>

            <Await resolve={DataPromsise.vans}>
            {renderVansElement}
            </Await>
        </div>
    )
}