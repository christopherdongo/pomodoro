
import React from 'react';
import img from '../../../img/jpg/pomodoro.jpeg'
import styled from 'styled-components'


const Pomodoroimg = styled.img`
       max-width: 100%;
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