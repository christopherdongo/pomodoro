import styled,{css} from "styled-components";

const NotificationDiv = styled.div`
  height: 3rem;
  margin-right: -15px;
  margin-left: -15px;

  & h1 {
    padding-top: 10px;
    font-size: 20px;
    font-weight: bold;
  }
  ${({ type }) => {
    switch (type) {
      case "work":
        return css`
          background-color: #5da423;
        `;
      case "shortBreak":
        return css`
          background-color: #f4ad42;
        `;
      case "longBreak":
        return css`
          background-color: #2ba6cb; ;
        `;
      default:
    }
  }}


  ${({running}) => {
        if(!running){
    return  css`
  animation-name: parpadeo;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  -webkit-animation-name:parpadeo;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  
@-moz-keyframes parpadeo{  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}

@-webkit-keyframes parpadeo {  
  0% { opacity: 1.0; }
  50% { opacity: 0.0; }
   100% { opacity: 1.0; }
}
@keyframes parpadeo {  
  0% { opacity: 1.0; }
   50% { opacity: 0.0; }
  100% { opacity: 1.0; }
}
background-color:aquamarine;
     `
        }
  }
  
  }
`;



export default (NotificationDiv);
