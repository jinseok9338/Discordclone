import BottomProfile from "../../components/BottomProfile";
import HomeNavigation from "../../components/HomeNavigation";
import MainContent from "../../components/MainContent";
import ServerList from "../../components/ServerList";
import TopNavigation from "../../components/TopNavigation";
import { MainPageBackground } from "./styledMainPage";

const MainPage = () => {
  return (
    <MainPageBackground>
          <TopNavigation/>
          <ServerList />
          <HomeNavigation />
          <BottomProfile />
          <MainContent/>
    </MainPageBackground>
  );
};

export default MainPage;
