
import { getJob } from "@/lib/fetching/job";
import React from "react";
import { Table } from "@heroui/react";

const RecruiterJobs = async () => {
  const getAllJobs = await getJob();
  console.log(getAllJobs);
  return (
    <div>
      <div>
        <h2 className="text-3xl">Manage All Jobs</h2>
      </div>
      <div  className="mt-5">
        <Table variant="secondary">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Job Title</Table.Column>
                <Table.Column>Type/Category</Table.Column>
                <Table.Column>Location</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                {getAllJobs.map((job) => (
                  <Table.Row key={job._id}>
                    <Table.Cell>{job.jobTitle}</Table.Cell>
                    <Table.Cell>{job.jobCategory}</Table.Cell>
                    <Table.Cell>{job.location}</Table.Cell>
                    <Table.Cell>{job.status}</Table.Cell>
                    <Table.Cell>
                        <button>Edit</button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default RecruiterJobs;
