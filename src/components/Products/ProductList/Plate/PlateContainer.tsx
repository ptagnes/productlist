import React, { ReactNode } from "react";
import styled from "styled-components";

interface PlateContainerProps {
  children: ReactNode;
}
const Content = styled.div<PlateContainerProps>`
  display: flex;
  flex-direction: row;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  align-content: center;
  @media (min-width: 1001px) {
    padding: 0.5em 6em;
    background: #faf8f8;
  }
`;
export function PlateContainer({ children, ...props }: PlateContainerProps) {
  return (
    <>
      <Content>{children}</Content>
    </>
  );
}
