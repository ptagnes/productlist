import styled, { css } from "styled-components";
const colPr = "#19a276";
const colHover = "#107079";
const colPrHover = "#157a59";
interface Props {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  large?: boolean;
  neutral?: boolean;
}
const Button = styled.button<Props>`
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.35em;
  margin: 10px 1px;
  border: none;
  border-width: 1px;
  border-radius: 3px;
  position: relative;
  transition: background-color 0.6s ease;
  overflow: hidden;
  outline: 0;
  cursor: pointer;
  background-color: ${(p) => (p.secondary ? "transparent" : colPr)};
  ${(p) =>
    p.large
      ? css`
          padding: 12px 40px;
        `
      : css`
          padding: 1em 3em;
        `}
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    transition: width 0.3s ease, height 0.3s ease;
  }
  &:disabled {
    background-color: gray;
  }
  &:hover {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.17);
    background: ${(p) => (p.secondary ? colHover : colPrHover)};
  }
  svg {
    font-size: 25px;
    vertical-align: middle;
  }
`;
export { Button };
