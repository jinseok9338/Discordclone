
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


export const imageContainer = styled.div`
height:50px;
width:50px;
 border-radius: 50px;
    box-sizing: border-box;
    background-color: #DDD;
    border: 5px solid #cfd8dc;
`

interface FriendsListIconAvatarsProps {
    src:string;
    selected:boolean;
    displayName: string;
}



function FriendsListIconAvatars({ src, selected, displayName }: FriendsListIconAvatarsProps) {
    return (
        <FriendsListIconAvatarsContainer >
            <imageContainer>
            <StyledFriendsListIconsAvatar src={src} selected={selected} />
          </imageContainer>
            <FriendsListIconAvatarsName>{displayName}</FriendsListIconAvatarsName>
        </FriendsListIconAvatarsContainer>
    )
}

export default FriendsListIconAvatars
