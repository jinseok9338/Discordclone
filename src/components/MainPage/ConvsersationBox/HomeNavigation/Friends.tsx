import styled, { keyframes } from "styled-components";
import { userType } from "../../../../Types/userType";

export const FriendsDiv = styled.div`
  position: relative;
  top: 0.5rem;
  display:flex;
  width: 100%;
  height: 33px;
  border-radius: 15px;
  margin-top: 1rem;
    &:hover {
    background-color: #3c3d3d;
  }
 
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const FirendsDetailDiv = styled.div`
  width: 151px;
  height: 33px;
  margin-left:1rem;
    display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "Area--1 Area--1"
    ". .";
`;

const FriendsName = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: white;
  margin: 0;
  grid-area: Area--1;
`;
const FriendsDetail = styled.p`
  font-size: 0.5rem;
  font-weight: 200;
  color: white;
  margin: 0;
`;

const RingContainer = styled.div`
 position: relative;
 display:flex;
 justify-content: center;
 align-items: center;

`

const Pulsate = keyframes`
 0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`

const Ringing = styled.div`
   border: 3px solid #62bd19; 
    -webkit-border-radius: 30px;
    height: 10px;
    width: 10px;
 
   animation: ${Pulsate} 1s ease-out;
  ;
    -webkit-animation-iteration-count: infinite;
    opacity: 0.0;
`



const Circle = styled.div`
margin-left:0.02rem;
 width: 5px;
    height: 5px;
    background-color: #62bd19;
    border-radius: 50%;
    position: absolute;
 
`
const PulsatingDot = () => (
  <RingContainer>
    <Circle></Circle>
    <Ringing></Ringing>
  </RingContainer>
)

const FriendsStatus = styled.div`
display:flex;
justify-content: center;
align-items:flex-start;
`

const StatusSpan = styled.span`
font-size:10px;
color:white;
margin-bottom:0.2rem;
`

interface FriendsPropsType {
  id: number;
  friend: userType;
}



const Friends = ({
  id,
  friend: { displayName, profilePic, userId },
}: FriendsPropsType) => {
  return (
    <FriendsDiv>
      <Avatar src={profilePic} alt="Avatar Image" />
      <FirendsDetailDiv>
        <FriendsName>{displayName}</FriendsName>
        <FriendsDetail>{`#${userId.slice(0,6)}`}</FriendsDetail>
        <FriendsStatus>
          <StatusSpan>online</StatusSpan>
          <PulsatingDot/>
</FriendsStatus>
      </FirendsDetailDiv>
    </FriendsDiv> 
  );
};

export default Friends;
 