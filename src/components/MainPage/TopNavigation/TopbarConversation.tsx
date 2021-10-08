import React from 'react'
import styled from "styled-components";

 const StyledTopbarConversation = styled.div`
width: 240px;
height: 48px;
background: #2F3136;
border-radius: 7px 0px 0px 0px;
display:flex;
justify-content: center;
align-items: center;
`;

const ConversationInput = styled.input`
width: 220px;
height: 28px;
background: #202225;
border-radius: 3px;
color:white;
`

function TopbarConversation() {
    return (
        <StyledTopbarConversation>
            <ConversationInput placeholder="Find or Start a Conversation ..."/>
        </StyledTopbarConversation>
    )
}

export default TopbarConversation
