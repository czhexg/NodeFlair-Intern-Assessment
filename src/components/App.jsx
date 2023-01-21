import React, { useState } from "react";

import appStyles from "../componentStyles/App.module.css";

import Jobs from "../data/Jobs";

import JobDesc from "./JobDesc";
import JobsList from "./JobsList";

function App() {
    const [selectedListing, setSelectedListing] = useState(Jobs[0]["id"]);
    const [selectedListingTitle, setSelectedListingTitle] = useState(
        Jobs[0]["title"]
    );
    return (
        <div className={appStyles.App}>
            <div className={appStyles.container}>
                <JobsList
                    selectedListing={selectedListing}
                    setSelectedListing={setSelectedListing}
                    setSelectedListingTitle={setSelectedListingTitle}
                    Jobs={Jobs}
                />
                <JobDesc selectedListingTitle={selectedListingTitle} />
            </div>
        </div>
    );
}

export default App;
