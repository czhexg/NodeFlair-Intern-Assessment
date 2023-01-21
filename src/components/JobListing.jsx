import React from "react";

import jobListingStyles from "../componentStyles/JobListing.module.css";

import TechStack from "./TechStack";

function JobListing(props) {
    return (
        <div
            className={
                jobListingStyles["JobListing"] +
                " " +
                jobListingStyles[props.outline]
            }
            onClick={() => {
                props.setSelectedListing(props.id);
                props.setSelectedListingTitle(props.job.title);
            }}
        >
            <div className={jobListingStyles["list-details"]}>
                <img
                    className={jobListingStyles["company-logo"]}
                    src={`https://nodeflair.com/companies/${props.job.company.id}.png`}
                    alt={props.job.company.companyname + " logo"}
                />
                <div className={jobListingStyles["company-name-rating"]}>
                    <div>
                        {props.job.company.companyname}
                        {props.job.company.rating != 0
                            ? props.job.company.rating + " ★"
                            : null}
                    </div>
                    <h2 className={jobListingStyles["job-title"]}>
                        {props.job.title}
                    </h2>
                </div>
                <span className={jobListingStyles["job-position"]}>
                    {props.job.position}
                </span>
            </div>
            <div className={jobListingStyles["add-list-details"]}>
                <div className={jobListingStyles["time-country"]}>
                    <span className={jobListingStyles["job-time-ago"]}>
                        {props.job.time_ago} ago
                    </span>
                    <span className={jobListingStyles.country}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="map-marker-alt"
                            className="svg-inline--fa fa-map-marker-alt "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height="1em"
                        >
                            <path
                                fill="currentColor"
                                d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                            ></path>
                        </svg>
                        {" " + props.job.country}
                    </span>
                </div>
                <div className={jobListingStyles.salary}>
                    {props.job.formatted_salary_min +
                        "-" +
                        props.job.formatted_salary_max +
                        " / mth"}
                </div>
            </div>
            <hr />
            <div className={jobListingStyles.techstacks}>
                {props.job.tech_stacks.map((tech) => {
                    return <TechStack key={tech.name} tech={tech} />;
                })}
            </div>
        </div>
    );
}

export default JobListing;
