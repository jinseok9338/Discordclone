import MakeChat from "../MakeChat";
import Devider from "./Devider";
import Heading from "./Heading";
import HomeIcon from "./HomeIcon";
import ServserNavigation from "./ServersNavigation";
import { StyledServerList } from "./styledServerList";

const ServerList = () => {
  return (
    <>
      <StyledServerList>
        <Heading />
        <HomeIcon />
        <Devider />
        <ServserNavigation />
      </StyledServerList>
      <MakeChat />
    </>
  );
};

export default ServerList;
