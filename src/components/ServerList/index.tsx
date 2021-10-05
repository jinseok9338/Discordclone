import Devider from "./Devider";
import Heading from "./Heading";
import HomeIcon from "./HomeIcon";
import { StyledServerList } from "./styledServerList";

const ServerList = () => {
  return (
    <StyledServerList>
      <Heading />
      <HomeIcon />
      <Devider/>
  </StyledServerList>)
};

export default ServerList;
