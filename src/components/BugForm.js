import React, { useState } from "react";
import axios from "axios";

const BugForm = ({ setBugs }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBug = { title, description };
        const res = await axios.post("http://localhost:5000/bugs", newBug);
        setBugs(prev => [...prev, res.data]);
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bug Title" required />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bug Description" required />
            <button type="submit">Report Bug</button>
        </form>
    );
};

export default BugForm;
