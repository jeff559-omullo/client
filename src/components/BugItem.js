import React from "react";
import axios from "axios";

const BugItem = ({ bug, setBugs }) => {
    const deleteBug = async () => {
        await axios.delete(`http://localhost:5000/bugs/${bug._id}`);
        setBugs(prev => prev.filter(b => b._id !== bug._id));
    };

    return (
        <div>
            <h3>{bug.title}</h3>
            <p>{bug.description}</p>
            <button onClick={deleteBug}>Delete</button>
        </div>
    );
};

export default BugItem;
