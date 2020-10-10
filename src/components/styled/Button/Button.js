
import styled from 'styled-components'
import {device} from '../device/device'


const Button = styled.button`
 font-size: 1em;
 padding: 0.25em 1em;
 border-radius:3px;
 color: mediumseagreen;
 border: 2px solid; 
 font-family: 'Sansita Swashed', cursive;

@media ${device.tablet}{
    font-size: 0.8em;
}

@media ${device.mobileL}{
    font-size:0.6em;
}
@media ${device.mobilex}{
    font-size:0.6em;
}

`


export default Button