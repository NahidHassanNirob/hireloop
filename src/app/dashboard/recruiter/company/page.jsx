import React from "react";
import CompanyProfile from "./companyProfile";
import { getSession } from "@/lib/core/session";
import { getRecruiterCompinies } from "@/lib/action/companies";

const CompanyPage = async () => {
  const session = await getSession();
  const recruiterId = session?.id;

  const companies = await getRecruiterCompinies(recruiterId);

  return (
    <div>
      <CompanyProfile
        companies={companies}
        recruiterId={recruiterId}
      ></CompanyProfile>
    </div>
  );
};

export default CompanyPage;
