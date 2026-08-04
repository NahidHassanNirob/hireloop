import { serverFetch } from "../core/server"
import { getSession } from "../core/session"


export const getRecruiterCompinies=async(recruiterId)=>{
    return await serverFetch('/api/my/companies', recruiterId)
}

export const getLoggedinRecruiterCompany=async()=>{
    const user=await getSession();
    return getRecruiterCompinies(user?.id);
    
}