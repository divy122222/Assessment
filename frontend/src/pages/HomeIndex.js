import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

export default function HomeIndex() {
    return (
        <div>
            <Navbar />
            <div className="hero">
                <h1>Welcome to freeCodeCamp.org</h1>
                <p>"I have not failed. I've just found 10,000 ways</p>
                <p>that won't work."</p>
                <p>- Thomas A. Edison</p>
                <h2>Courses :</h2>
                <div className="course-buttons">
                    <button className="course-button">
                        {" "}
                        Responsive Web Design Certifications (300 hours){" "}
                    </button>
                    <button className="course-button">
                        {" "}
                        JavaScript Algorithms and Data Structure(400 hrs){" "}
                    </button>
                    <button className="course-button">
                        {" "}
                        Data Visualisation Certification (200 hours){" "}
                    </button>
                    <button className="course-button">
                        {" "}
                        Quality Assurance Certifications (300 hours){" "}
                    </button>
                </div>
            </div>
        </div>
    );
}
