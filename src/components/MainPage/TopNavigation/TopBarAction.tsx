import styled from "styled-components";

const StyledTopbarActionDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  width: 349px;
  height: 24px;
`;
const OnlineHighLightedDiv = styled.div`
  width: 60px;
  height: 24px;
  background-color: #3e4249;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OnlineHighLightedP = styled.p`
  font-size: 1rem;
  color: white;
`;
const TopbarActionP = styled.p`
  font-size: 1rem;
  color: white;
  margin-left: 1rem;
`;

const AddFriendsButton = styled.div`
  width: 90px;
  height: 24px;
  background-color: #3ba55d;
  margin-left: 1rem;
  color: white;
  border-radius: 3px;
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopbarAction = () => {
  return (
    <StyledTopbarActionDiv>
      <OnlineHighLightedDiv>
        <OnlineHighLightedP>Online</OnlineHighLightedP>
      </OnlineHighLightedDiv>
      <TopbarActionP>All</TopbarActionP>
      <TopbarActionP>Blocked</TopbarActionP>
      <AddFriendsButton>
        <OnlineHighLightedP>Add Friends</OnlineHighLightedP>
      </AddFriendsButton>
    </StyledTopbarActionDiv>
  );
};

export default TopbarAction;
