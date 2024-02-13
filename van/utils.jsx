import { Outlet, redirect } from "react-router-dom";

export async function requireAuth (){
    const isLoggedIn = false;
    if(!isLoggedIn){
        throw redirect('/login?message=You must Login first.');
    }
    return <Outlet />
}