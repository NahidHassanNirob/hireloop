"use client";

import React from "react";
import { Button ,Toast,toast} from "@heroui/react";
import { Briefcase, Globe } from "@gravity-ui/icons";
import { createJob } from "@/lib/action/jobs";
import { useRouter } from "next/navigation";


export default function PostJobPage() {
  const router=useRouter()
  const textInputClass =
    "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 focus:outline-none rounded-lg h-12 px-3 text-sm placeholder:text-zinc-600 transition-all";
  const textAreaClass =
    "w-full text-white bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 focus:outline-none rounded-lg p-3 text-sm placeholder:text-zinc-600 resize-none transition-all";
  const selectBoxClass =
    "w-full bg-[#1c1c1e] border border-zinc-800 hover:bg-[#242426] focus:border-zinc-600 focus:outline-none h-12 rounded-lg px-3 text-white text-sm cursor-pointer appearance-none transition-all";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());
    formValues.isRemote = formData.get("isRemote") === "on";
    
    const playLode = {
      ...formValues,
      status: "active",
      companyId: "123",
      isPublicVisible: "true",
    };

    try {
        const sendData = await createJob(playLode);    
        toast.success('Job posted successfully!');
        router.refresh();
        
    } catch (error) {
        toast.error('Something went wrong!');
    }
};

  return (
    <div className="min-h-screen bg-[#0d0d0e] text-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto bg-[#121214] border border-zinc-900 rounded-xl p-8 shadow-2xl">
        {/* Form Header block */}
        <div className="border-b border-zinc-800 pb-6 mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">
            Post a New Job
          </h1>
          <p className="text-zinc-400 text-sm mt-1">
            Fill out the details below to publish your open position.
          </p>

          {/* Company verification status panel */}
          <div className="mt-4 inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-400">
            <Briefcase size={14} className="text-zinc-500" />
            Posting as:{" "}
            <span className="font-semibold text-zinc-300">
              Acme Corp (Auto-filled)
            </span>
            <span className="text-emerald-500 font-medium bg-emerald-950/30 px-1.5 py-0.5 rounded border border-emerald-900/50">
              Approved
            </span>
          </div>
        </div>

        {/* Main Form Elements Layout */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 1: Job Information */}
          <div className="space-y-6 w-full">
            <h2 className="text-lg font-medium text-zinc-300 border-b border-zinc-900 w-full pb-2 mb-2">
              Job Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-zinc-400 font-medium text-sm">
                  Job Title
                </label>
                <input
                  name="jobTitle"
                  type="text"
                  placeholder="e.g. Senior Frontend Engineer"
                  className={textInputClass}
                  required
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-zinc-400 font-medium text-sm">
                  Job Category
                </label>
                <div className="relative">
                  <select
                    name="jobCategory"
                    className={selectBoxClass}
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#1c1c1e] text-zinc-600"
                    >
                      Select category
                    </option>
                    <option
                      value="technology"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Technology
                    </option>
                    <option value="design" className="bg-[#1c1c1e] text-white">
                      Design
                    </option>
                    <option
                      value="marketing"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Marketing
                    </option>
                    <option value="sales" className="bg-[#1c1c1e] text-white">
                      Sales
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-zinc-400 font-medium text-sm">
                  Job Type
                </label>
                <div className="relative">
                  <select
                    name="jobType"
                    className={selectBoxClass}
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#1c1c1e] text-zinc-600"
                    >
                      Select job type
                    </option>
                    <option
                      value="full-time"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Full-time
                    </option>
                    <option
                      value="part-time"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Part-time
                    </option>
                    <option
                      value="contract"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Contract
                    </option>
                    <option
                      value="internship"
                      className="bg-[#1c1c1e] text-white"
                    >
                      Internship
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Inline layout grouping for Salary and Currency mapping */}
              <div className="grid grid-cols-3 gap-2">
                <div className="col-span-2 space-y-2">
                  <span className="text-zinc-400 font-medium text-sm block">
                    Salary Range
                  </span>
                  <div className="flex gap-2">
                    <input
                      name="minSalary"
                      placeholder="Min"
                      type="number"
                      className={textInputClass}
                      required
                    />
                    <input
                      name="maxSalary"
                      placeholder="Max"
                      type="number"
                      className={textInputClass}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="relative">
                    <select
                      name="currency"
                      className={selectBoxClass}
                      defaultValue="USD"
                    >
                      <option value="USD" className="bg-[#1c1c1e] text-white">
                        USD ($)
                      </option>
                      <option value="EUR" className="bg-[#1c1c1e] text-white">
                        EUR (€)
                      </option>
                      <option value="GBP" className="bg-[#1c1c1e] text-white">
                        GBP (£)
                      </option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-zinc-500">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400 font-medium text-sm">
                    Location
                  </span>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      name="isRemote"
                      type="checkbox"
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-zinc-400 peer-checked:after:bg-black after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-white relative"></div>
                    <span className="text-xs text-zinc-400 font-medium">
                      Remote
                    </span>
                  </label>
                </div>

                <div className="relative flex items-center">
                  <Globe
                    size={16}
                    className="absolute left-3 text-zinc-600 pointer-events-none z-10"
                  />
                  <input
                    name="location"
                    type="text"
                    placeholder="e.g. Austin, TX"
                    className={`${textInputClass} pl-10`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label className="text-zinc-400 font-medium text-sm">
                  Application Deadline
                </label>
                <input
                  name="deadline"
                  type="date"
                  className={textInputClass}
                  required
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Job Description */}
          <div className="space-y-6 w-full">
            <h2 className="text-lg font-medium text-zinc-300 border-b border-zinc-900 w-full pb-2 mb-2">
              Job Details & Description
            </h2>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-zinc-400 font-medium text-sm">
                Responsibilities
              </label>
              <textarea
                name="responsibilities"
                placeholder="Outline the core everyday responsibilities for this role..."
                rows={4}
                className={textAreaClass}
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-zinc-400 font-medium text-sm">
                Requirements
              </label>
              <textarea
                name="requirements"
                placeholder="List required experience, skills, and certifications..."
                rows={4}
                className={textAreaClass}
                required
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label className="text-zinc-400 font-medium text-sm">
                Benefits (Optional)
              </label>
              <textarea
                name="benefits"
                placeholder="Perks, healthcare, equity, remote stipends..."
                rows={3}
                className={textAreaClass}
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-zinc-800 w-full">
            <Button
              type="button"
              variant="bordered"
              className="border-zinc-800 text-zinc-300 hover:bg-zinc-900 rounded-lg px-6 font-medium h-11"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-white text-black font-semibold hover:bg-zinc-200 rounded-lg px-6 transition-colors h-11"
            >
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
