import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download="CV - Grégoire VAILLANT" className="btn">
                Download CV
            </a>
            <a href="mailto:vaillant.g@outlook.com" className="btn btn-primary">
                Let's Talk
            </a>
        </div>
    );
};

export default CTA;
