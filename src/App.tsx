import React from "react";
import { createGlobalStyle, css, useTheme } from "styled-components";

import "./App.css";
import { ThemeToggle } from "./components/ThemeToggle";
import logo from "./logo.svg";

const GlobalStyle = createGlobalStyle(
  ({ theme: { color, spacing } }) => css`
    body {
      margin: 0;
      background: ${color.screenBackground};
      transition: background 200ms linear;
    }

    p {
      color: ${color.text};
      margin: ${spacing.m};
    }

    * {
      box-sizing: border-box;
    }
  `
);

function App() {
  const { name } = useTheme();

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <foo/>
          <logo/>
          <img src="logo" alt="" />
          <p className="App-logo">{name === "light" ? "🌞" : "🌝"}</p>
          <p>
            Click the button at below or change the system appearance to toggle
            theme
          </p>
          <ThemeToggle />
        </header>
      </div>
    </>
  );
}

export default App;
