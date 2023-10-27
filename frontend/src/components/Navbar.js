import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <TextField
                style={{ width: "500px" }}
                placeholder="Search 8,000+ tutorials"
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                    startAdornment: <SearchIcon color="primary" fontSize="small" />,
                }}
            />
            <p className="logo" style={{ paddingLeft: "130px" }}>
                freeCodeCamp
            </p>
        </div>
    );
}

export default Navbar;
