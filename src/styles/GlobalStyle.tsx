import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
  a {
		text-decoration: none;
	} 
	button {
		cursor: pointer;
	}

`

export default GlobalStyle;