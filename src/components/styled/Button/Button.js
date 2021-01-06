
import styled, {css} from 'styled-components'

const Button = styled.button`
 font-size: 1em;
 padding: 0.25em 1.5em;
 width:120px;
 border-radius:3px;
 /*color: mediumseagreen;*/
 border: 2px solid; 
 font-family: Arial, Helvetica, sans-serif;
 font-weight:700;
 margin:0.5rem;

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