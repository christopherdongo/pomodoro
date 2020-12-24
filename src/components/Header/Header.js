import React from 'react';
import styled from 'styled-components'

const HeaderComponent = styled.header`
    background-color: #205C61;
    height:80px;
    font-family: 'Sansita Swashed', cursive;
    display: flex;
    text-align:center;
    flex-direction: column;
    align-content:center;
    justify-content:center;
   h1{
       font-size:2.5em;   
       font-family: 'Sansita Swashed', cursive;
   }
`
const Header =()=> {
    return(
        <HeaderComponent>
                <h1>Pomodoro Timer</h1>
        </HeaderComponent>
    )
}

export default Header
