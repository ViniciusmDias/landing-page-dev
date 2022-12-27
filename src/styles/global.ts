import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.black};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea {
    font: 400 1rem 'Days One', sans-serif;
  }

  button {
    font: 400 0.875rem 'Poppins', sans-serif;
    cursor: pointer;
    transition: all 0.4 ease;
    
    :hover {
      opacity: 0.8;
    }
  }

  h1 {
    font-size: 1.25rem;
    line-height: 1.1em;
    text-transform: uppercase;
  }

  h3 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem ;
    font-family: 'Poppins', sans-serif;
  }
`;
