import React from "react";
import Pomodoro from "./components/pomodoro/Pomodoro";
import Header from "./components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::after, ::before{
  box-sizing:content-box;
 padding:0;
}

body {
    background-color: white;
    min-height:100vh;
  }
`;
const Contornodiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Contornodiv>
        <Pomodoro />
      </Contornodiv>
    </>
  );
}

export default App;
