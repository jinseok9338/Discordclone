import styled from "styled-components";

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

const Avatar = ({ id }: { id: number }) => {
  return (
    <StyledAvatarIcon
      src="image/avatar.png"
      alt="Avatar"
      id={id}
    ></StyledAvatarIcon>
  );
};

export default Avatar;
