import styled from "styled-components";
import useMaintainState from "../../../hooks/useMaintainState";

const StyledProfileDiv = styled.div`
  width: 91px;
  height: 32px;
  display: flex;
  margin-left: 1rem;
`;

const StyledProfileAvater = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
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

const Profile = () => {
  const { mainState:{user:{displayName,userId,profilePic}} } = useMaintainState()
  return (
    <StyledProfileDiv>
      <StyledProfileAvater src={profilePic} alt="ProfilePic" />
      <StyledProfileDetailDiv>
        <StyledProfileP>{displayName}</StyledProfileP>
        <StyledProfileNumP>{`#${userId.slice(0,5)}`}</StyledProfileNumP>
      </StyledProfileDetailDiv>
    </StyledProfileDiv>
  );
};

export default Profile;
