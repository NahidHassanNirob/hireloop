"use server";
const base_url=process.env.NEXT_PUBLIC_BASE_URL;
export const createJob = async (newJob) => {
    console.log('new post is', newJob);
    const res=await fetch(`${base_url}/api/jobs`,{
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newJob)
    })
    return res.json();
};
