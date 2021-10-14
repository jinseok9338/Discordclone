import React, { useContext } from "react";
import { useState } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
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
  const { mainState, chats } = useMaintainState();
  const { state,dispatch } = useContext(stateContext);

  return (
    <StyledServersNavigation>
      {mainState?.user?.chatRooms &&
        chats.map((chat) =>
          chat.users.length > 0 ? (
            <AvatarGroup
              id={3}
              chat={chat}
              chatRoomId={mainState?.selctedChatRoom}
            />
          ) : (
            <Avatar
              chatRoomId={mainState?.selctedChatRoom}
              id={0}
              chat={chat}
            />
          )
        )}
      <Popup
        trigger={() => <div><AddServer></AddServer></div>}
        position="right top"
        on="click"
        open={state.open}
        onOpen={()=>dispatch({type:"OPEN_MAKECHAT",payload:true})}
        closeOnDocumentClick
        mouseLeaveDelay={300}
        mouseEnterDelay={0}
        contentStyle={{ padding: '0px', border: 'none',marginLeft:"1rem" }}
        arrow={false}
      >
        <MakeChat/>
      </Popup>
     
    </StyledServersNavigation>
  );
};

export default ServserNavigation;
