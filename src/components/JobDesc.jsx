import React from "react";

import jobDescStyles from "../componentStyles/JobDesc.module.css";

function JobDesc(props) {
    return (
        <h1 className={jobDescStyles.JobDesc}>{props.selectedListingTitle}</h1>
    );
}

export default JobDesc;
