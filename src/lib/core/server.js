'use server'
const baseurl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverFetch=async(path,recruiterId)=>{
    const companies= await fetch(`${baseurl}${path}?recruiterId=${recruiterId}`)
    return companies.json() || [];
}



export const serverMutation = async (path,data) => {
    const res=await fetch(`${baseurl}${path}`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    })
    return res.json();
};
