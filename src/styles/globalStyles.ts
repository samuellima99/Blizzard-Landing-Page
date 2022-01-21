import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


:root {
  --primary-light: #61CDFF;
  --primary-default: #00AEFF;
  --primary-dark: #025A9A;
  --primary-darkest: #002550;

  --neutral-100:#020203;
  --neutral-200:#0B0D12;
  --neutral-300:#15171B;
  --neutral-400:#1F2025;
  --neutral-500:#26272E;
  --neutral-600:#2D2F38;
  --neutral-700:#363842;

  --orange: #FFA800;
  --orange-light: #FFB118;
  --orange-dark: #E68A00


}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body { 
    background-color: var(--neutral-100);
    font-family: 'Poppins', sans-serif;
  }

  html, body {
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar
{
	width: 4px;
	background-color: #F5F5F5;
}

&::-webkit-scrollbar-thumb
{
	border-radius: 2px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	background-color: var(--primary-default);
}
  }

  a { 
    text-decoration: none;
  }

  li { 
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .container {
    width: 100%;
    max-width: 1528px;
    margin: 0 auto;
    overflow: hidden;

    display: flex;
    align-items: center;


    @media(max-width: 1440px)  {
      max-width: 1216px;
    }

  }

`;
