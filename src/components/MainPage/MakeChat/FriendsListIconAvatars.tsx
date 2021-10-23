import React from "react";
import styled from "styled-components";
import { StyledFriendsListIconsAvatar } from "./StyledMakeChat";

export const FriendsListIconAvatarsContainer = styled.div`
  padding-top: 1rem;
  width: 70px;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendsListIconAvatarsName = styled.div`
  font-size: 1rem;
  color: white;
`;

export const ImageContainer = styled.div.attrs(
  (props: { selected: boolean }) => props
)`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(props) => (props.selected ? "5px solid #082f3f" : "none")};
`;

interface FriendsListIconAvatarsProps {
  src: string;
  selected: boolean;
  displayName: string;
}

function FriendsListIconAvatars({
  src,
  selected,
  displayName,
}: FriendsListIconAvatarsProps) {
  return (
    <FriendsListIconAvatarsContainer>
      <ImageContainer selected={selected}>
        <StyledFriendsListIconsAvatar src={src} />
      </ImageContainer>
      <FriendsListIconAvatarsName>{displayName}</FriendsListIconAvatarsName>
    </FriendsListIconAvatarsContainer>
  );
}

export default FriendsListIconAvatars;
