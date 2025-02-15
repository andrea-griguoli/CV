import React from "react";
import Lottie from "lottie-react";

const Hourglass = () => {
    return <Lottie animationData={require("../../../resources/animation.json")} loop={true} style={{ width: 70, height: 70 }} />;
};

export default Hourglass;
