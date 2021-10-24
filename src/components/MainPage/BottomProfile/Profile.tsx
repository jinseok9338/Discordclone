import styled from "styled-components";
import { useAuth } from "../../../hooks/useAuth";

const StyledProfileDiv = styled.div`
  width: 91px;
  height: 32px;
  display: flex;
  margin-left: 1rem;
`;

const StyledProfileDetailDiv = styled.div`
  position: relative;
  left: 0.5rem;
  width: 51px;
  height: 31px;
  display: flex;
  flex-direction: column;
`;

const StyledProfileP = styled.p`
  font-size: 0.8rem;
  color: white;
  font-weight: 600;
  margin: 0;
`;
const StyledProfileNumP = styled.p`
  font-size: 0.7rem;
  color: white;
  font-weight: 200;
  margin: 0;
`;

const StyledProfileAvater = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const UserData = {
  "userId": "617521d34147e76375188bb0",
  "profilePic": "https://source.unsplash.com/collection/25",
  "displayName": "Hodges Lynch"
}
const Profile = () => {
  const { currentUserProfile } = useAuth();
  return (
    <StyledProfileDiv>
      <StyledProfileAvater
        src={UserData.profilePic}
        alt="ProfilePic"
      />
      <StyledProfileDetailDiv>
        <StyledProfileP>{UserData.displayName.slice(0,7)}</StyledProfileP>
        <StyledProfileNumP>{`#${UserData.userId?.slice(
          0,
          5
        )}`}</StyledProfileNumP>
      </StyledProfileDetailDiv>
    </StyledProfileDiv>
  );
};

export default Profile;
