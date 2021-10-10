import { useContext } from "react";
import styled from "styled-components";
import { stateContext } from "../../../../StateManagement/context";
import Friends from "./Friends";

const StyledFriendiconBox = styled.div`
  width: 224px;
  height: 42px;
  /* Dark Mode/Gray 5 */
  background: #393c43;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledFriendsIcon = styled.svg`
  position: relative;
  left: 1rem;
`;
const FriendsIcon = () => (
  <StyledFriendsIcon
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.77528 2H1C1 10.6232 4.77528 13.744 6.66292 14.0725V19H22C22 12.5942 17.2809 12.5942 13.9775 12.5942C6.66292 12.5942 4.77528 6.43478 4.77528 2Z"
      fill="white"
    />
    <path
      d="M13.9775 2.5C19.6405 2.5 19.6405 11.1232 13.9775 11.1232C8.0867 11.1232 8.31461 2.5 13.9775 2.5Z"
      fill="white"
    />
  </StyledFriendsIcon>
);

const StyledP = styled.p`
  position: relative;
  color: white;
  left: 2rem;
`;

const FriendsList = () => {
  const { state:{user:{friends}}, dispatch } = useContext(stateContext)

  return (
    <>
      <StyledFriendiconBox>
        <FriendsIcon />
        <StyledP>Friends</StyledP>
      </StyledFriendiconBox>
      {friends && 
        friends.map((friend) => (<Friends id={friends.indexOf(friend)} friend={friend} />))
      }
    </>
  );
};

export default FriendsList;
