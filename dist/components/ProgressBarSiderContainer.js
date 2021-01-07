import React from "react";
import "./Slider.css";
export const ProgressBarSiderContainer = ({ hover, children, progress, stylesSliderProgress, }) => {
    const hoverStyles = hover
        ? {
            backgroundColor: (stylesSliderProgress === null || stylesSliderProgress === void 0 ? void 0 : stylesSliderProgress.backgroundColorOnHover) || "rgba(16, 185, 129",
        }
        : {};
    const styles = Object.assign(Object.assign({
        width: `${progress * 100}%`,
        height: "100%",
        backgroundColor: "#ccc",
    }, stylesSliderProgress), hoverStyles);
    return (React.createElement("div", { className: "slider-progress", style: Object.assign({}, styles) }, children));
};
