"use client";
import dynamic from "next/dynamic";
import WithRecaptcha from "@/components/Shared/WithRecaptcha/WithRecaptcha";

const Contact = dynamic(() => import("./Contact").then((mod) => mod.default));
const ContactWithRecaptcha = WithRecaptcha(Contact);

export default ContactWithRecaptcha;