import styled from "styled-components";
import useMaintainState from "../../../../hooks/useMaintainState";
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
      <AddServer />
    </StyledServersNavigation>
  );
};

export default ServserNavigation;
