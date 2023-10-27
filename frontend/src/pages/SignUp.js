import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
    const history = useNavigate();
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const sendRequest = async () => {
        const res = await axios
            .post("https://server-shzg.onrender.com/api/signup", {
                name: inputs.name,
                email: inputs.email,
                password: inputs.password,
            })
            .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history("/login"));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    marginLeft="auto"
                    marginRight="auto"
                    width={300}
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h2">Signup</Typography>

                    <TextField
                        name="name"
                        onChange={handleChange}
                        value={inputs.name}
                        variant="outlined"
                        placeholder="Name"
                        margin="normal"
                    />
                    <TextField
                        name="email"
                        onChange={handleChange}
                        type={"email"}
                        value={inputs.email}
                        variant="outlined"
                        placeholder="Email"
                        margin="normal"
                    />
                    <TextField
                        name="password"
                        onChange={handleChange}
                        type="password"
                        value={inputs.password}
                        variant="outlined"
                        placeholder="Password"
                        margin="normal"
                    />
                    <Button variant="contained" type="submit">
                        Signup
                    </Button>
                </Box>
            </form>
        </div>
    );
}
