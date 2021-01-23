import css from "styled-jsx/css"
import { colors } from "@/styles/theme"

export default css`
  button {
    display: flex;
    align-items: center;
    background: ${colors.dark};
    color: #fff;
    border-radius: 9999px;
    border-style: none;
    font-size: 16px;
    font-weight: 800;
    padding: 8px 24px;
    transition: opacity 0.3s ease;
  }

  button > :global(svg) {
    margin-right: 8px;
  }

  button:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`
