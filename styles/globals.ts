import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  h1 {
    font-size: 36px;
    text-align: center;
    margin-bottom: 24px;
  }

  input[type='text'] {
    width: 500px;
    height: 46px;
    padding: 12px;
    font-size: 16px;
    margin-right: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    width: 120px;
    height: 46px;
    padding: 12px;
    font-size: 14px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
  }
`;
