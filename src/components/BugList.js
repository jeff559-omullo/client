import React from "react";
import BugItem from "./BugItem";

const BugList = ({ bugs, setBugs }) => {
    return (
        <div>
            {bugs.map(bug => <BugItem key={bug._id} bug={bug} setBugs={setBugs} />)}
        </div>
    );
};

export default BugList;
