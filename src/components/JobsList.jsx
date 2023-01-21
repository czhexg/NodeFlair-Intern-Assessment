import React, { useState } from "react";

import "../componentStyles/JobsList.module.css";

import JobListing from "./JobListing";

function JobsList(props) {
    return (
        <div className="JobsList">
            {props.Jobs.map((job) => {
                return (
                    <JobListing
                        key={job.id}
                        id={job.id}
                        job={job}
                        selectedListing={props.selectedListing}
                        setSelectedListing={props.setSelectedListing}
                        setSelectedListingTitle={props.setSelectedListingTitle}
                        outline={
                            props.selectedListing == job.id ? "outline" : ""
                        }
                    />
                );
            })}
        </div>
    );
}

export default JobsList;
