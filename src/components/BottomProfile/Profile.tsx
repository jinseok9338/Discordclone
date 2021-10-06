import styled from "styled-components";

 const StyledProfileDiv = styled.div`
  width: 91px;
  height: 32px;
  display:flex;
  margin-left: 1rem;
`;

const StyledProfileAvater = styled.img`
width: 32px;
height: 32px;
border-radius: 50%;
`;

const StyledProfileDetailDiv = styled.div`
position:relative;
left:0.5rem;
  width: 51px;
height: 31px;
  display:flex;
  flex-direction: column;
`;

const StyledProfileP =styled.p`
    font-size:.8rem;
    color:white;
    font-weight:600;
    margin:0;
`
const StyledProfileNumP = styled.p`
    font-size:.7rem;
    color:white;
    font-weight:200;
    margin:0;
`



const Profile = () => {
    return <StyledProfileDiv>
        <StyledProfileAvater src="/image/avater2.jpg" alt="ProfilePic" />
        <StyledProfileDetailDiv>
            <StyledProfileP>Jinseok9338</StyledProfileP>
            <StyledProfileNumP>#50021</StyledProfileNumP>
        </StyledProfileDetailDiv>
    </StyledProfileDiv>;
};

export default Profile;
