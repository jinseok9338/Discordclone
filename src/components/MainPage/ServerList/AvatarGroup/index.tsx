import styled from "styled-components";
import { chatType } from "../../../../Types/chatType";

const AvatarGroupDivOutLayer = styled.div.attrs(
  (props: { id: number }) => props
)`
  width: 52px;
  height: 52px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  top: ${(props) => (props.id === 0 ? "0rem" : "1rem")};
  background: rgba(88, 101, 242, 0.4);
  border-radius: 15px;
`;

const AvatarGroupDivInLayer = styled.div.attrs(
  (props: { id: number }) => props
)`
  width: 40px;
  height: 40px;
  display: grid;
  grid-template-columns: 1.1rem 1rem;
  grid-row: auto auto;
  grid-column-gap: 0.2rem;
  grid-row-gap: 0.2rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const StyledAvatar = styled.img.attrs((props: { id: number }) => props)`
  background-color: #333;
  color: #fff;
  width: 1.1rem;
  height: 1.1rem;
  border-radius: 50%;
`;

interface AvatarGroupProps {
  id: number;
  chat: chatType;
  chatRoomId: string;
}

const AvatarGroup = ({ id }: { id: number }) => {
  return (
    <AvatarGroupDivOutLayer id={id}>
      <AvatarGroupDivInLayer>
        {[1, 2, 3, 4].map((i) => (
          <StyledAvatar
            src={`https://source.unsplash.com/collection/${i}`}
            alt="Avatar"
          />
        ))}
      </AvatarGroupDivInLayer>
    </AvatarGroupDivOutLayer>
  );
};

export default AvatarGroup;
