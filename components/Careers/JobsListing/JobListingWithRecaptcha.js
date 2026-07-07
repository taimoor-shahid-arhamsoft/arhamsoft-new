"use client";
import dynamic from "next/dynamic";
import WithRecaptcha from "@/components/Shared/WithRecaptcha/WithRecaptcha";

const JobListing = dynamic(() =>
  import("./JobListingModal").then((mod) => mod.default)
);

const jobsWithRecaptcha = WithRecaptcha(JobListing);

export default jobsWithRecaptcha;