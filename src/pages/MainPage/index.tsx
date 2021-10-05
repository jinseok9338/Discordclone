import HomeNavigation from "../../components/HomeNavigation";
import ServerList from "../../components/ServerList";
import { MainPageBackground } from "./styledMainPage";

const MainPage = () => {
  return (
    <MainPageBackground>
          <ServerList />
          <HomeNavigation/>
    </MainPageBackground>
  );
};

export default MainPage;
