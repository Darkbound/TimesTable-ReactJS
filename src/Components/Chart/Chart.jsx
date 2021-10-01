import React from "react";
import { StyledDivLineContainer, StyledLine } from "./elements";

export function Chart({ datasets, height, width, ...props }) {
  return (
    <StyledDivLineContainer {...props} height={height} width={width}>
      <StyledLine data={{ datasets }} width={null} height={null} />
    </StyledDivLineContainer>
  );
}
