import React from 'react';
import styled from 'styled-components'


const HeaderComponent = styled.header`
    background-color: #205C61;
    height:3rem;
    font-size: 20px;
    font-family: 'Sansita Swashed', cursive;
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
