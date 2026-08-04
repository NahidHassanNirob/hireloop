import JobsCard from '@/components/jobs/JobsCard';
import { getJob } from '@/lib/fetching/job';
import React from 'react';

const JobsPage =async () => {
    const allJobs=await getJob();
    return (
        <div>
            <div>
                {allJobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)}
            </div>
        </div>
    );
};

export default JobsPage;