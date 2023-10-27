import React from "react";
import { Link } from "react-router-dom";

export default function Button() {
    return (
        <div style={{ width: "120px", height: "30px" }}>
            <Link to="/login">
                <button className="signin-button">Sign In</button>
            </Link>
        </div>
    );
}
