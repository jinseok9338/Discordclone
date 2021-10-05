import React from 'react'
import styled from "styled-components";

export const StyledHeading = styled.div`
position: absolute;
width: 49px;
height: 7.91px;
left: 12px;
top: 8px;
`;

export const StyledLetter = styled.h1`
color: #72767D;
max-width: 49px;
max-height: 7.91px;;
`;


function Heading() {
    return (
        <StyledHeading>
            <StyledLetter>Discord</StyledLetter>
        </StyledHeading>
    )
}

export default Heading
