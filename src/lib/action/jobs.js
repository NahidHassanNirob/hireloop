"use server";

import { serverMutation } from "../core/server";

export const createJob = async (playLode) => {
    return await serverMutation('/api/jobs',playLode)
};

export const createCompanies=async(newCompanies)=>{
    return await serverMutation('/api/companies',newCompanies)
}

