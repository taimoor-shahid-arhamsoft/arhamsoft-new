"use client";

import Lottie from "react-lottie-player";

export default function LottieAnimation({ animationData }) {
    return <Lottie loop path={animationData} play />;
}
