import { createGlobalStyle } from "styled-components";
import colors from "./theme/styles/colors";
import spacing from "./theme/styles/spacing";

export const AppStyles = createGlobalStyle`
  
  :root {
  --font1: "JetBrains Bold";
  --font2 : "JetBrains";
    }

  body {
    background: ${({ theme }) => (theme as any).colors.body};
    color: ${({ theme }) => (theme as any).colors.text};
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    scrollbar-width:none;
    overflow-y:scroll;
     
  }
  body::-webkit-scrollbar {
      display:none;
  }

  .main-container {
    margin-right: 250px;
    background:  #016c45;	background: radial-gradient(circle, #016c45 0%, rgba(13, 13, 13, 1) 60%);
    min-height: 100vh;

    @media (max-width: 768px) {
      margin-right:0px;
      margin-bottom:30vh;
  }
  }
  hr {

  }
  p,h1,h2,h3,h4,h5,h6 {
      margin:4px;
  }

  b{
    font-weight: bold ;
  }

  a {
    color: ${({ theme }) => (theme as any).colors.link.text};
    cursor: pointer;
    text-decoration: none;
  }
  
@font-face {
    font-family: "JetBrains Bold";
    src: url("./fonts/JetBrainsMono-ExtraBold.ttf");
    font-style: normal;
    font-display: swap;
    font-weight:bold;
  }
  @font-face {
    font-family: "JetBrains Light";
    src: url("./fonts/JetBrainsMono-Light.ttf");
    font-style: normal;
    font-display: swap;
    font-weight:300;
  }
    @font-face {
    font-family: "JetBrains";
    src: url("./fonts/JetBrainsMono-Regular.ttf");
    font-style: normal;
    font-display: swap;
    font-weight:normal;
  }

  h1 {
    font-family: var(--font1) !important;
    text-transform: uppercase !important;
    margin: 10px;
  }

  a,
  button,
  i,
  input {
    transition: all 0.2s ease-in 0s;
  }

  input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
  
        input[type=number] {
            -moz-appearance: textfield;
        }

  * {
    box-sizing: border-box;
    font-family: "JetBrains", sans-serif !important;
  }

  button.btn {
    background-color: ${({ theme }) => (theme as any).colors.button.background};
    color: ${({ theme }) => (theme as any).colors.button.text};
  }

  button.cancel {
    background-color: #00000080;
    color: ${({ theme }) => (theme as any).colors.button.text};
  }

  button:disabled {
    background-color: #000000;
    color: #e9e9e9;
  }

  button:hover {
    cursor: pointer;
  }


  .dark {
    color: ${({ theme }) => theme.palette.primary}
  }
  button {
    border: 0;
    display: inline-block;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    background-color: #1064EA;
    color: #FFFFFF;
    font-family: ${({ theme }) => (theme as any).font};
  }

  ::-webkit-scrollbar {
    background-color: ${({ theme }) => theme.palette.color6};
    height: 5px;
    width: 10px;

  }

  /* Track */
  ::-webkit-scrollbar-track {
    height: 5px;
    
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    height: 10px;
    border-radius:20px;
  background-color: ${({ theme }) => theme.palette.secondary};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {

  }

  // typography utils
  ${["center", "left", "right", "justify"].map(
		(typo) => `.text-${typo} { text-align: ${typo}; }`
	)}

  // flex utils
  .flex {
    display: flex;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
  }



  // mobile or desktop display
  .flex-desktop {
    display: flex;
    @media (max-width: 768px) {
      display: block;
  }
  }
  .flex-mobile {
    display: block;
    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;

    }
  }

  .colored {
    color: ${({ theme }) => theme.palette.color1};
  }

.mobile{
display:flex;
  @media (max-width: 768px) {
  display: hidden;
    }
}


  .hover-btn {
    cursor: pointer;
    animation: ease-in;
    width: fit-content;
        height: fit-content;

    &:hover{ 
      opacity: 0.6;
      transform: scale(1.07);
    }
  }


  // margin utils
  .center {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

${[
	"center",
	"flex-start",
	"flex-end",
	"space-around",
	"space-between",
	"space-evenly",
].map((type) => `.justify-${type} { justify-content: ${type}; }`)}

${["center", "start", "end", "stretch", "baseline", "normal"].map(
	(type) => `.align-items-${type} { align-items: ${type}; }`
)}



  ${colors}
  ${spacing}


    @keyframes opacityAnim {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 100%;
    }
  }
  @keyframes chevron {
    0% {
      left: -10px;
    }
    100% {
      left: 0px;
    }
  }

`;
