'use client';

import React, { useState } from 'react';
import { Form, Fieldset, TextField, TextArea, Label, Input, Button } from '@heroui/react';
import { Factory, ArrowRight, Pencil } from '@gravity-ui/icons';
import { createCompanies } from '@/lib/action/jobs';
import { MapPin, Link2, Building2 } from 'lucide-react';

const textInputClass = "w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg px-3 py-2.5 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition";
const textAreaClass = "w-full bg-zinc-900/50 border border-zinc-800 text-white rounded-lg p-3 outline-none placeholder:text-zinc-600 focus:border-zinc-700 transition resize-none";

export default function CompanyProfile({ recruiterId , companies}) {
    const [company, setCompany] = useState(companies || null);
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [logoFile, setLogoFile] = useState(null); 

    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file); 

        const apiKey = process.env.NEXT_PUBLIC_IMAGEBB_API_KEY;
        
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData 
        });

        const result = await response.json();
        
        if (result?.success && result?.data?.url) {
            return result.data.url; 
        }
        
        throw new Error(result?.error?.message || "Image upload failed");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        const formData = new FormData(e.currentTarget);
        const newErrors = {};

        const fields = ['companyName', 'industry', 'websiteUrl', 'location', 'employeeCount', 'description'];
        fields.forEach(field => {
            if (!formData.get(field)) {
                newErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            let logoUrl = company?.logo || "";

           
            if (logoFile && logoFile.size > 0) {
                logoUrl = await handleImageUpload(logoFile);
            }

            const payload = {
                companyName: formData.get('companyName'),
                industry: formData.get('industry'),
                websiteUrl: formData.get('websiteUrl'),
                location: formData.get('location'),
                employeeCount: formData.get('employeeCount'),
                description: formData.get('description'),
                recruiterId,
                logo: logoUrl,
                status: 'pending'
            };

            
            setIsEditing(false);
            setLogoFile(null); 
            await createCompanies(payload);
        } catch (error) {
            console.error("Upload Error Details:", error);
            alert(error.message || "Failed to update profile. Please check your image or API key.");
        } finally {
            setLoading(false);
        }
    };

    const ErrorText = ({ error }) => error ? <p className="text-red-500 text-xs mt-1">{error}</p> : null;

   
    if (!company?._id && !isEditing) {
        return (
            <div className="max-w-xl mx-auto my-12 bg-zinc-950 border border-zinc-900 rounded-xl p-12 text-center space-y-6">
                <Factory size={48} className="text-zinc-600 mx-auto" />
                <h2 className="text-xl font-semibold text-zinc-200">No Company Registered</h2>
                <Button onPress={() => setIsEditing(true)} className="bg-white text-black font-semibold rounded-lg px-6">
                    Register Company <ArrowRight size={16} />
                </Button>
            </div>
        );
    }

    
    if (company && !isEditing) {
        return (
            <div className="max-w-3xl mx-auto my-8 bg-zinc-950 p-8 border border-zinc-900 rounded-xl space-y-6">
                <div className="flex justify-between items-center border-b border-zinc-900 pb-4">
                    <div className="flex items-center gap-4">
                        {company.logo && (
                            <img src={company.logo} alt="Logo" className="w-16 h-16 rounded-lg object-cover border border-zinc-800" />
                        )}
                        <h1 className="text-2xl font-bold text-white">{company.companyName}</h1>
                    </div>
                    <Button onPress={() => setIsEditing(true)} className="bg-zinc-800 text-zinc-300">
                        <Pencil size={14} /> Edit
                    </Button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-zinc-400">
                    <p className="flex gap-1"> <Building2 /> <span className="text-white">{company.industry}</span></p>
                    <p className="flex gap-1"><MapPin /> <span className="text-white">{company.location}</span></p>
                    <p className="flex gap-1"> <Link2/> <span className="text-blue-400">{company.websiteUrl}</span></p>
                </div>
                <p className="text-zinc-300 p-4 bg-zinc-900/30 rounded-lg">{company.description}</p>
            </div>
        );
    }

    
    return (
        <div className="max-w-3xl mx-auto my-8 bg-zinc-950 p-8 border border-zinc-900 rounded-xl">
            <Form onSubmit={handleSubmit} className="space-y-8">
                <Fieldset className="space-y-6 w-full">
                    <legend className="text-xl font-semibold text-zinc-200 border-b border-zinc-900 w-full pb-3 mb-2">
                        {company ? 'Edit Company Profile' : 'Configure Workspace Platform'}
                    </legend>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Company Name *</Label>
                            <Input name="companyName" defaultValue={company?.companyName || ""} className={textInputClass} required />
                            <ErrorText error={errors.companyName} />
                        </TextField>
                        <TextField className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Industry *</Label>
                            <Input name="industry" defaultValue={company?.industry || ""} className={textInputClass} required />
                            <ErrorText error={errors.industry} />
                        </TextField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <TextField className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Website URL *</Label>
                            <Input name="websiteUrl" defaultValue={company?.websiteUrl || ""} className={textInputClass} required />
                            <ErrorText error={errors.websiteUrl} />
                        </TextField>
                        <TextField className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Location *</Label>
                            <Input name="location" defaultValue={company?.location || ""} className={textInputClass} required />
                            <ErrorText error={errors.location} />
                        </TextField>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <TextField className="flex flex-col gap-1 w-full">
                            <Label className="text-zinc-400 font-medium text-sm">Employee Count *</Label>
                            <Input name="employeeCount" defaultValue={company?.employeeCount || ""} className={textInputClass} required />
                            <ErrorText error={errors.employeeCount} />
                        </TextField>

                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-zinc-400 font-medium text-sm">Company Logo</span>
                            <label className="w-full h-12 border border-dashed border-zinc-700 bg-zinc-900/40 rounded-lg flex items-center justify-center cursor-pointer hover:border-zinc-500 transition-colors">
                                <input
                                    name="logo"
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                                />
                                <span className="text-sm text-zinc-400">
                                    {logoFile ? logoFile.name : "Upload Logo"}
                                </span>
                            </label>
                        </div>
                    </div>

                    <TextField className="flex flex-col gap-1 w-full">
                        <Label className="text-zinc-400 font-medium text-sm">Brief Description *</Label>
                        <TextArea name="description" defaultValue={company?.description || ""} rows={4} className={textAreaClass} required />
                        <ErrorText error={errors.description} />
                    </TextField>
                </Fieldset>

                <div className="flex justify-end pt-5 border-t border-zinc-900 w-full gap-3">
                    <Button variant="flat" onPress={() => setIsEditing(false)}>Cancel</Button>
                    <Button type="submit" isLoading={loading} className="bg-white text-black font-semibold rounded-lg px-6 h-11">
                        {loading ? 'Processing...' : (company ? 'Update' : 'Complete Setup')}
                    </Button>
                </div>
            </Form>
        </div>
    );
}