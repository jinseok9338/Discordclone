import BottomProfile from "../../components/BottomProfile";
import ConversationBox from "../../components/ConvsersationBox";
import MainContent from "../../components/MainContent";
import ServerList from "../../components/ServerList";
import TopNavigation from "../../components/TopNavigation";
import { MainPageBackground } from "./styledMainPage";

const MainPage = () => {
  return (
    <MainPageBackground>
      <TopNavigation />
      <ServerList />
      <ConversationBox />
      <BottomProfile />
      <MainContent />
    </MainPageBackground>
  );
};

export default MainPage;
