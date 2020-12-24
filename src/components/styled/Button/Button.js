
import styled, {css} from 'styled-components'

const Button = styled.button`
 font-size: 1em;
 padding: 0.25em 1em;
 width:93px;
 border-radius:3px;
 /*color: mediumseagreen;*/
 border: 2px solid; 
 font-family: 'Sansita Swashed', cursive;
 font-weight:500;

 ${({ color }) => {
    switch (color) {
      case "work" :
        return css`
          background-color: #5da423;
        `;
      case "shortBreak" :
        return css`
          background-color: #f4ad42;
        `;
      case "longBreak":
        return css`
          background-color: #2ba6cb; ;
        `;
      default:
    }
  }
 }
`

export default Button