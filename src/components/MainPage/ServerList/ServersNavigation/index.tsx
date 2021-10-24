import { useContext } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

import { stateContext } from "../../../../StateManagement/context";

import MakeChat from "../../MakeChat";
import AddServer from "../AddServer";
import Avatar from "../Avatar";
import AvatarGroup from "../AvatarGroup";

export const StyledServersNavigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: relative;
  width: 68px;
  height: auto;
  top: 1rem;
`;

const ServserNavigation = () => {
  const { state, dispatch } = useContext(stateContext);

  const chats = [{}];

  return (
    <StyledServersNavigation>
      <AvatarGroup id={0} />
      <Avatar />
      <Avatar />
      <Popup
        trigger={() => (
          <div>
            <AddServer></AddServer>
          </div>
        )}
        position="right top"
        on="click"
        open={state.open}
        onOpen={() => dispatch({ type: "OPEN_MAKECHAT", payload: true })}
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none", marginLeft: "1rem" }}
        arrow={false}
      >
        <MakeChat />
      </Popup>
    </StyledServersNavigation>
  );
};

export default ServserNavigation;
