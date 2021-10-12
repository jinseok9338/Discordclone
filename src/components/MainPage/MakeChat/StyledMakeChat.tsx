import styled from "styled-components";

export const StyledMakeChat = styled.div`
  position: absolute;
  width: 250px;
  height: 500px;
 background-color: aqua;
 z-index:10;
 display:flex;
 flex-direction:column;
`;

export const StyledSearchBarContainer = styled.div`
width: 100%;
height:80px;
  background: #202225;
  border-radius: 3px;


`

export const StyledSearchBarInput = styled.input`
width:100%;
height:100%;
  color: white;
    outline: none;
  :focus {
    outline: none;
  }
  box-shadow: none;
  border-width: 0px;
  border: none;
  margin-top: 0.1rem;
`

export const  FriendsListIconsContainer = styled.div`
width:100%;
height:300px;
overflow-y: auto;
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

`

export const FriendsListIconsAvatar = styled.img`
width:50px;
height:50px;
border-radius: 50%;
`

export const StyledSelectButton = styled.button`
width:100px;
height:50px;
`

