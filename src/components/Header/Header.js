import React from 'react';
import styled from 'styled-components'
import {device} from '../styled/device/device'

const HeaderComponent = styled.header`
    background-color: #205C61;
    height:4rem;
    font-family: 'Sansita Swashed', cursive;
    display: flex;
    margin-right:-15px;
    margin-left: -15px;
    text-align:center;
    flex-direction: column;
    align-content:center;
    border-top-right-radius:8px;
    border-top-left-radius:8px;

   h1{
       font-size:3em;

       @media ${device.tablet}{
           font-size: 2.7em;
       }
       @media ${device.mobilex}{
           font-size:2.5em;
       }
       @media ${device.mobileM}{
           font-size:2.2em;
       }
       
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
