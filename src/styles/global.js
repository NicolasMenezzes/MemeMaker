import {createGlobalStyle} from 'styled-components'
import img from "../images/Group.png"
import imgmobile from "../images/Group9.png"


export default createGlobalStyle `
   *{
       margin: 0;
       padding: 0;
       box-sizing: bordex-box;
       font-family: 'Roboto', sans-serif;   
    }

    body {
        background-color: #020202;
        background-image: url(${img});
        background-repeat: no-repeat;
        background-size: 1350px;
 
    }


    button,
    input {
        outline: 0;
    }

    button {
        cursor: pointer
    }

`;

