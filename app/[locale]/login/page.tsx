"use client";

import React from "react";
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
  CircularProgress,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "../../_hooks/useLocale";
import {
  getApiBaseUrl,
  loginApi,
  saveAccessToken,
  saveCredentials,
} from "../../_utils/api";

const LoginPage = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () =>
    setShowPassword((show: boolean) => !show);
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") ?? (locale === "de" ? "de" : "en");

  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [errorCode, setErrorCode] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setErrorCode(1);
      return;
    }

    setErrorCode(0);
    setErrorMessage("");
    setLoading(true);

    try {
      const baseUrl = getApiBaseUrl();
      const response = await loginApi(baseUrl, email.trim(), password);
      saveAccessToken(response.accessToken);
      saveCredentials(email.trim(), password);
      router.push(`/${locale}/select-mode`);
    } catch (err) {
      setErrorCode(2);
      setErrorMessage(
        err instanceof Error ? err.message : "Email or password is incorrect"
      );
    } finally {
      setLoading(false);
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
        {lang === "de" ? "Login (Deutsch)" : "Login (English)"}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 6 }}>
        {lang === "de"
          ? "E-Mail und Passwort eingeben"
          : "Enter email and password"}
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
        onChange={() => {
          setErrorCode(0);
          setErrorMessage("");
        }}
      >
        <TextField
          fullWidth
          label="Email"
          placeholder="Enter Email"
          variant="outlined"
          value={email}
          sx={{ mb: 2 }}
          error={errorCode === 1 && email === "" || errorCode === 2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <FormControl
          fullWidth
          variant="outlined"
          error={errorCode === 1 && password === "" || errorCode === 2}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
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
          <FormHelperText error={errorCode !== 0}>
            {errorCode === 1
              ? "Please enter both email and password"
              : errorCode === 2
                ? errorMessage || "Email or password is incorrect"
                : ""}
          </FormHelperText>
        </FormControl>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, fontWeight: 700 }}
          type="submit"
          size="large"
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
        </Button>
      </form>
    </Box>
  );
};

export default LoginPage;
