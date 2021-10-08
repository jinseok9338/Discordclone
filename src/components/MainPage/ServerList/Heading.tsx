import React from "react";
import styled from "styled-components";

export const StyledHeading = styled.div`
  position: relative;
  top: 0rem;
  left: 0.5rem;
`;

export const StyledLetter = styled.p`
  color: #72767d;
  font-size: 1rem;
  font-weight: bold;
`;

function Heading() {
  return (
    <StyledHeading>
      <StyledLetter>Discord</StyledLetter>
    </StyledHeading>
  );
}

export default Heading;
