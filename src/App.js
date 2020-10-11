import React from "react";
import Pomodoro from "./components/pomodoro/Pomodoro";
import Header from "./components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: whitesmoke;
    text-align:center;
    overflow:hidden;
    margin-top:2em;
  }
`;

const Contornodiv = styled.div`
  -webkit-box-shadow: 10px 10px 113px 8px rgba(4, 7, 79, 1);
  -moz-box-shadow: 10px 10px 113px 8px rgba(4, 7, 79, 1);
  box-shadow: 10px 10px 113px 8px rgba(4, 7, 79, 1);
  border-radius: 20px;
  width:500px;
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <div className="row d-flex justify-content-center">
          <Contornodiv className="col-xl-8 col-lg-8 col-md-10 col-sm-10 col-10 mt-5">
            <Header />
            <Pomodoro />
          </Contornodiv>
        </div>
      </div>
    </>
  );
}

export default App;
