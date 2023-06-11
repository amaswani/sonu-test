import React, { useState } from "react";
import {
  ThemeProvider,
  Container,
  Typography,
  TextField,
  Button,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = createTheme();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("first");

    if (username === "" || password === "") {
      alert("Please enter both username and password.");
    } else {
      localStorage.setItem("token", "123456");
      navigate("/dashboard");
      // Perform login logic here
      setError("");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" sx={{ paddingTop: "40px" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth type="submit">
            Login
          </Button>
        </form>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
