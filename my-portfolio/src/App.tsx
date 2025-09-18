// App.jsx
import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import DragNDrop from "./pages/DragNDrop";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={toggleTheme} mode={mode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dragndrop" element={<DragNDrop />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;