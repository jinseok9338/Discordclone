import styled from "styled-components";
import { useAuth } from "../../../../hooks/useAuth";
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
  const { currentUserProfile } = useAuth();

  const friends = [
    {
      "userId": "617521d3c75c484c5eeb894c",
      "displayName": "Sherri Phelps",
      "profilePic": "https://source.unsplash.com/collection/9",
      "status": "sleep"
    },
    {
      "userId": "617521d34147e76375188bb0",
      "displayName": "Hodges Lynch",
      "profilePic": "https://source.unsplash.com/collection/15",
      "status": "sleep"
    },
    {
      "userId": "617521d38ac3e98e4cd4c50c",
      "displayName": "Vilma Reynolds",
      "profilePic": "https://source.unsplash.com/collection/7",
      "status": "busy"
    },
    {
      "userId": "617521d3fde59793a873381c",
      "displayName": "Karina Cooper",
      "profilePic": "https://source.unsplash.com/collection/5",
      "status": "busy"
    },
    {
      "userId": "617521d373fc8a13f29645d3",
      "displayName": "Roberson Heath",
      "profilePic": "https://source.unsplash.com/collection/0",
      "status": "online"
    }
  ]// There goes the dummy data...
  return (
    <>
      <StyledFriendiconBox>
        <FriendsIcon />
        <StyledP>Friends</StyledP>
      </StyledFriendiconBox>
      {friends
        ? friends?.map((friend) => (
            <Friends
              id={friends?.indexOf(friend)}
              friend={friend}
            />
          ))
        : null}
    </>
  );
};

export default FriendsList;
