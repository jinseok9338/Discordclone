import styled from "styled-components";
import { chatType } from "../../../../Types/chatType";
import { stateContext } from "../../../../StateManagement/context";
import { useContext } from "react";

export const StyledAvatarIcon = styled.img.attrs(
  (props: { id: number }) => props
)`
  vertical-align: middle;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${(props) => (props.id === 0 ? "0rem" : "0.5rem")};
  cursor: pointer;
`;

interface AvatarProps {
  id: number;
  chat: chatType;
  chatRoomId: string;
}

const Avatar = ({ id, chat, chatRoomId }: AvatarProps) => {
  const { dispatch } = useContext(stateContext);

  return (
    <StyledAvatarIcon
      onClick={dispatch({ type: "SET_CHATROOM", payload: chatRoomId })}
      src={chat.users[0]?.profilePic}
      alt="Avatar"
      id={id}
    ></StyledAvatarIcon>
  );
};

export default Avatar;
