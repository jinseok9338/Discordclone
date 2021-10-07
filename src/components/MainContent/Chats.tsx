import styled from "styled-components";
import MeChat from "./MeChat";
import OtherPersonChat from "./OtherPersonChat";

export const StyledChatsContainer = styled.div`
width: 1190px;
border-right: solid 1px rgb(226, 226, 226,0.3);
background-color: #36393F;
display:flex;
flex-direction: column-reverse;
align-items: center;
justify-content: flex-start;

`;

const DayContainer = styled.div`
width: 114px;
height: 26px;
border-radius: 14px;
display: flex;
justify-content:center;
align-items: center;
background-color: #d3d3d3;
`;

const DayContainerP = styled.p`
color:white;
font-size:1rem;
`



const Chats = () => {
    return (
        <StyledChatsContainer>
            <MeChat/>
                <OtherPersonChat/>
            <DayContainer>
                <DayContainerP>Today</DayContainerP>
            </DayContainer>
        </StyledChatsContainer>
    )
}

export default Chats