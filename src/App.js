import React from "react";
import Header from "./components/Header/Header";
import TransactionList from "./components/Transaction/TransactionList";
import "./App.css";
import TransactionProvider from "./store/TransactionProvider";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { pink, purple } from "@material-ui/core/colors";
import styled from "styled-components";
import Form from "./components/Form/Form";

const StyledLayout = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 95%;
  margin: auto;
`;
const BackgroundStyles = styled.div`
  background: rgb(238, 174, 193);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 193, 1) 9%,
    rgba(233, 175, 218, 1) 41%,
    rgba(192, 148, 233, 1) 75%,
    rgba(192, 148, 233, 1) 99%
  );
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: pink[500],
    },
  },
  text: {
    primary: "rgba(255, 255, 255, 0.08)",
    secondary: "rgba(255, 255, 255, 0.3)",
  },
});

function App() {
  return (
    <BackgroundStyles>
      <TransactionProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <StyledLayout>
            <Form />
            <TransactionList />
          </StyledLayout>
        </ThemeProvider>
      </TransactionProvider>
    </BackgroundStyles>
  );
}

export default App;
