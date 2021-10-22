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

const Profile = () => {
  const { currentUserProfile} = useAuth()
  return (
    <StyledProfileDiv>
      <StyledProfileAvater src={currentUserProfile?.profilePic} alt="ProfilePic" />
      <StyledProfileDetailDiv>
        <StyledProfileP>{currentUserProfile?.displayName}</StyledProfileP>
        <StyledProfileNumP>{`#${currentUserProfile?.userId?.slice(
          0,
          5
        )}`}</StyledProfileNumP>
      </StyledProfileDetailDiv>
    </StyledProfileDiv>
  );
};

export default Profile;
