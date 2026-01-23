"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "../theme/theme";
import Navigation from "./Navigation";

export default function ClientWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation />
      <div className="md:ml-64">
        {children}
      </div>
    </ThemeProvider>
  );
}
