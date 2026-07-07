import { NextResponse } from "next/server";
import dbConnect from "../../config/db";
import Subscribe from "@/model/subscribe-email";
import { apiSecurity } from "../../utils/api-security";

export const POST = async (req) => {
  const securityError = await apiSecurity(req);
  if (securityError) return securityError;

  try {
    await dbConnect();

    const { email } = await req.json();

    const existingSubscription = await Subscribe.findOne({ email });
    if (existingSubscription) {
      return NextResponse.json(
        {
          success: false,
          message: "You are already subscribed!",
        },
        { status: 409, headers: req.corsHeaders }
      );
    }

    const newSubscription = new Subscribe({ email });
    await newSubscription.save();

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for subscribing!",
      },
      { status: 200, headers: req.corsHeaders }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message || "Something went wrong" },
      { status: 500, headers: req.corsHeaders }
    );
  }
};
