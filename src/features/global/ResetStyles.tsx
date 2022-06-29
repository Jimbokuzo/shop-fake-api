import { Global, css } from "@emotion/react";

export const ResetStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      li {
        list-style: none;
      }
      body {
        background: white;
      }
      body,
      ul,
      li {
        margin: 0;
        padding: 0;
      }
      a {
        text-decoration: none;
      }

      ::-webkit-scrollbar {
        width: 5px;
        background-color: black;
      }
      ::-webkit-scrollbar-track {
        background-color: white;
        margin-top: 50px;
      }
      ::-webkit-scrollbar-track {
        margin-top: 50px;
      }
      ::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: black;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: #242424;
      }
    `}
  />
);
