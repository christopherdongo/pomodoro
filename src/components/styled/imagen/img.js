
import React from 'react';
import img from '../../../img/jpg/pomodoro.jpeg'
import styled from 'styled-components'
import {device} from '../device/device'

const Pomodoroimg = styled.img`
       display:block;
       width:90%;
       height:270px;
       border-radius:10px;  
       object-fit:fill;
       object-position:center;
       @media ${device.tablet} {
         width:550px;
       }  
`
const Img =()=>{
    return(
      <>
       <Pomodoroimg src={img} alt="pomodoro" />
      </>
    )
}

export default Img