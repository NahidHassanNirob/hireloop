const baseurl = process.env.NEXT_PUBLIC_BASE_URL;
export const getJob = async (companyId="", status="") => {
  const res = await fetch(
    `${baseurl}/api/jobs?companyId=${companyId}&status=${status}`,
    { cache: "no-store" },
  );
  return res.json();
};

export const getRecruiterJobs=async(companyId)=>{
  console.log(companyId," id is ")
  if(!companyId){
    return [];
  }
  const res=await fetch(`${baseurl}/api/jobs?companyId=${companyId}`,{cache:"no-store"})
  return res.json();
}
