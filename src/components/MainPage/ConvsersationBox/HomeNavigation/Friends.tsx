import styled from "styled-components";

export const FriendsDiv = styled.div`
  position: relative;
  top: 0.5rem;
  display: flex;
  width: 195px;
  height: 33px;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const FirendsDetailDiv = styled.div`
  width: 151px;
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FriendsName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;
const FriendsDetail = styled.p`
  font-size: 0.5rem;
  font-weight: 200;
  color: white;
  margin: 0;
`;

const Friends = ({ id }: { id: number }) => {
  return (
    <FriendsDiv>
      <Avatar src="/image/avatar1.png" alt="Avatar Image" />
      <FirendsDetailDiv>
        <FriendsName>Jason</FriendsName>
        <FriendsDetail>Listening to Music</FriendsDetail>
      </FirendsDetailDiv>
    </FriendsDiv>
  );
};

export default Friends;
