import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #3acd9d;
  border-right: 2px solid #3acd9d;
  border-bottom: 2px solid #3acd9d;
  border-left: 3px solid #19a276;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  align-self: center;
`;

export default Spinner;
