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
  cursor: pointer;
  margin-top: 0.5rem;
`;

interface AvatarProps {
  id: number;
  chat: chatType;
  chatRoomId: string;
}

const Avatar = () => {
  return (
    <StyledAvatarIcon
      src={`https://source.unsplash.com/random`}
      alt="Avatar"
    ></StyledAvatarIcon>
  );
};

export default Avatar;
