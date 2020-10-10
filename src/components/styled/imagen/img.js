
import React from 'react';
import img from '../../../img/jpg/pomodoro.jpeg'
import styled from 'styled-components'

import {device} from '../device/device'


const Pomodoroimg = styled.img`
       width: 100%;
       height:270px;
       display:block;
       margin-left: auto;
       margin-right: auto;
       border-radius:10px;     
`
const Img =()=>{
    return(
      <>
       <Pomodoroimg src={img} alt="pomodoro" />
      </>
    )
}

export default Img