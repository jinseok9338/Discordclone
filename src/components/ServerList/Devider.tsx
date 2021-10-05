import styled from "styled-components";

export const StyledDevider = styled.div`
position:relative;
top:0.4rem;
left: 1.2rem;
 width: 32px;
height: 2px;
background: #2D2F32;
border-radius: 1px;
`;


const Devider = () => {
    return (
        <StyledDevider/>
    )
}

export default Devider