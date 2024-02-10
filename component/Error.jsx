import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
function Error() {
    const error = useRouteError();
    
  return (
    <div 
    style={{display:"flex", justifyContent:'center', paddingTop:'10px'}}> 
    <span style={{fontSize:"50px", fontStyle:'italic', fontFamily:'serif'}}>{error.statusText}! {error.message} </span>
    
    </div>
  )
}

export default Error