import styled from "styled-components";

export const StyledMakeChat = styled.div`
  width: 250px;
  height: 500px;
  background-color: #191a1b;
  z-index: 7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
`;

export const StyledSearchBarContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #202225;
  display:flex;
  align-items: center;
   border-radius: 15px;
`;

export const StyledSearchBarInput = styled.input`
background-color: #0f0f0f;
 text-indent: 1rem;
  width: 80%;
  height: 60%;
  color: white;
  outline: none;
  :focus {
    outline: none;
  }
  box-shadow: none;
  border-width: 0px;
  border: none;
  margin-top: 0.1rem;
  border-radius: 15px;
  margin-left: 0.7rem;
`;

export const StyledFriendsListIconsContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow-y: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
    align-items: center;
  justify-items: center;
`;

export const StyledFriendsListIconsAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

`;

export const StyledSelectButtonContainer = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  align-items: center;
  justify-content: flex-end;
`;

export const StyledSelectButton = styled.button`
  width: 120px;
  height: 50px;
  margin-right: 1rem;
  margin-top: 1rem;
   border-radius: 18px;
  background-color: #38393a;
  border: solid 1px transparent;
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  transition: all .1s ease-in-out;
  &:hover {
    background-color: transparent;
    border-color: #fff;
    transition: all .1s ease-in-out;
  }
`;
