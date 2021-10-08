import styled from "styled-components";
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
  return (
    <StyledServersNavigation>
      <Avatar id={0} />
      <Avatar id={1} />
      <AvatarGroup id={3} />
      <AddServer />
    </StyledServersNavigation>
  );
};

export default ServserNavigation;
