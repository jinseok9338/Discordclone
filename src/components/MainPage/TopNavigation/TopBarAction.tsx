import Popup from "reactjs-popup";
import styled from "styled-components";
import AddFriendsMenu from "./AddFriendsMenu";

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
  cursor:pointer;
`;

const TopbarAction = () => {
  return (
    <StyledTopbarActionDiv>
      <OnlineHighLightedDiv>
        <OnlineHighLightedP>Online</OnlineHighLightedP>
      </OnlineHighLightedDiv>
      <TopbarActionP>All</TopbarActionP>
      <TopbarActionP>Blocked</TopbarActionP>
      <Popup
        trigger={() =><div> <AddFriendsButton>
          <OnlineHighLightedP>Add Friends</OnlineHighLightedP>
        </AddFriendsButton></div>}
        position="right top"
        on="click"
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none', marginLeft: "1rem" }}
        arrow={false}
      >
        <AddFriendsMenu />
      </Popup>
      
    </StyledTopbarActionDiv>
  );
};

export default TopbarAction;



