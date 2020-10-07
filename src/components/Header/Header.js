import React from 'react';
import styled from 'styled-components'


const HeaderComponent = styled.header`
    background-color: #205C61;
    height:3rem;
    font-size: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    margin-right:-15px;
    margin-left: -15px;
    text-align:center;
    flex-direction: column;
    align-content:center;
    border-top-right-radius:8px;
    border-top-left-radius:8px;
`
const Header =()=> {

    return(
        <HeaderComponent>
                <h1>Pomodoro Timer</h1>
        </HeaderComponent>
    )
}

export default Header
