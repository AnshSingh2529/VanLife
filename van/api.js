//  For Vans Page
export default async function getVans() {
    const res = await fetch("/api/vans")
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
}


//  For HostVans
export  async function getHostVans (){
const res =  await fetch("/api/host/vans")
if (!res.ok) {
    throw {
        message: "Failed to fetch HostVans", 
        statusText: res.statusText,
        status: res.status
    }
}
const data = await res.json();
return data.vans;
}



