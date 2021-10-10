import styled from "styled-components";
import { chatType } from "../../../../Types/chatType";

export const StyledAvatarIcon = styled.img.attrs(
  (props: { id: number }) => props
)`
  vertical-align: middle;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: ${(props) => (props.id === 0 ? "0rem" : "0.5rem")};
`;

interface AvatarProps {
  id: number;
  chat:chatType
}

const Avatar = ({ id,chat }: AvatarProps) => {

  return (
    <StyledAvatarIcon
      src={chat.users[0]?.profilePic}
      alt="Avatar"
      id={id}
    ></StyledAvatarIcon>
  );
};

export default Avatar;
