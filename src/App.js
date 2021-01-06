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
html{
  width:100vw;
  
}
body {
    background-color: white;
    min-height:100vh;
  }
`;
const Contornodiv = styled.div`
width:100%;
max-width:650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items:center;
margin-right: auto;
margin-left: auto;
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
