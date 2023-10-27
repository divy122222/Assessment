import React from "react";
import Navbar from "./Navbar";
import Button from "./Button";

function Hero() {
    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    display: "inline-flex",
                    width: "100%",
                    background: "#333",
                    alignItems: "center",
                }}
            >
                <Navbar />
                <Button />
            </div>
            <div className="hero">
                <div className="hero-content">
                    <h1>Learn to Code - for free.</h1>
                    <h2>Build Projects.</h2>
                    <h3>Earn Certifications.</h3>
                    <p>
                        Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten
                        jobs at tech companies.
                    </p>
                    <button className="get-started-button">
                        {" "}
                        Get Started (it's free){" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
