"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const theme = useTheme();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show: boolean) => !show);
  const router = useRouter();

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [errorCode, setErrorCode] = React.useState(0);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(email === "" || password === "") {
      setErrorCode(1);
    }else if(email !== "gastrosoftware_test@gmail.com" || password !== "!Test123") {
      setErrorCode(2);
    }else {
      setErrorCode(0);
      router.push("/select-mode");  
    }
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mx: 8,
      }}
    >
      <Typography
        variant="h2"
        color="primary"
        sx={{
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Restaurant Login
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
        Enter email and password
      </Typography>

      <form onSubmit={handleSubmit} style={{ width: "100%"}} onChange={() => setErrorCode(0)}>
        <TextField
          fullWidth
          label="Email"
          placeholder="Enter Email"
          variant="outlined"
          sx={{ mb: 2 }}
          error={errorCode === 1 && email === "" || errorCode === 2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <FormControl 
          fullWidth 
          variant="outlined" 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
          error={errorCode === 1 && password === "" || errorCode === 2}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            placeholder="Enter Password"
          />
          <FormHelperText error={errorCode !== 0}>{errorCode === 1 ? "Please enter both email and password" : errorCode === 2 ? "Email or password is incorrect" : ""}</FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, fontWeight: 700 }}
          type="submit"
          size="large"
        >
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
