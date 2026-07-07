"use client";
import PageBanner from "./PageBanner";
import WithRecaptcha from "@/components/Shared/WithRecaptcha/WithRecaptcha";

const PageBannerWithRecaptcha = WithRecaptcha(PageBanner);

export default PageBannerWithRecaptcha;