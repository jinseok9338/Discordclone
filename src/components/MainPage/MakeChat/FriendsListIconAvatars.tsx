
import React from 'react'
import styled from 'styled-components';
import { StyledFriendsListIconsAvatar } from './StyledMakeChat';

export const FriendsListIconAvatarsContainer = styled.div`
padding-top: 1rem;
  width: 70px;
  height: 70px;
    display:flex;
flex-direction: column;
align-items: center;
`;

export const FriendsListIconAvatarsName = styled.div`
font-size:1rem;
color:white;

`



function FriendsListIconAvatars() {
    return (
        <FriendsListIconAvatarsContainer>
            <StyledFriendsListIconsAvatar src={`image/avatar1.png`} />
            <FriendsListIconAvatarsName>name</FriendsListIconAvatarsName>
        </FriendsListIconAvatarsContainer>
    )
}

export default FriendsListIconAvatars
