import React, { useState, useEffect } from "react";
import axios from "axios";
import BugForm from "../components/BugForm";
import BugList from "../components/BugList";

const Home = () => {
    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/bugs")
            .then(res => setBugs(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Bug Tracker</h1>
            <BugForm setBugs={setBugs} />
            <BugList bugs={bugs} setBugs={setBugs} />
        </div>
    );
};

export default Home;
