import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function VansDetail () {
    const params = useParams();
    const [detail, setDetail] = useState(null);
    const Location = useLocation();
    
    
    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
        .then( res => res.json())
        .then( data => setDetail(data.vans))
    },[params.id]);

    const Search = Location.state?.search || "";
    const Type = Location.state?.type || "all";

    return (
        <div className="van-detail-container">
            <Link
                to={`..${Search}`}
                relative='path'         
                className="back-button"
            >&larr; <span>Back to `{Type}` vans</span></Link>
        {detail ? (
            <div className="van-detail">
                <img src={detail.imageUrl} />
                <i className={`van-type ${detail.type} selected`}>{detail.type}</i>
                <h2>{detail.name}</h2>
                <p className="van-price"><span>${detail.price}</span>/day</p>
                <p>{detail.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : <h2>Loading...</h2>}
    </div>
    )
}