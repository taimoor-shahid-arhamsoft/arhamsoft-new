"use client";
import Products from "./Products";
import WithRecaptcha from "@/components/Shared/WithRecaptcha/WithRecaptcha";

const ProductsWithRecaptcha = WithRecaptcha(Products);

export default ProductsWithRecaptcha;