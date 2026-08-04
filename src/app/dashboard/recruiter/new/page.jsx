import React from 'react';
import PostJobPage from './PostJobsForm';
import { getLoggedinRecruiterCompany } from '@/lib/action/companies';

const PostJobsPage = async() => {
    const company=await getLoggedinRecruiterCompany();
    console.log(company,"this is company")
    return (
        <div>
            <PostJobPage company={company}></PostJobPage>
        </div>
    );
};

export default PostJobsPage;