import { useContext } from "react";
import BottomProfile from "../../components/MainPage/BottomProfile";
import ConversationBox from "../../components/MainPage/ConvsersationBox";
import MainContent from "../../components/MainPage/MainContent";
import ServerList from "../../components/MainPage/ServerList";
import TopNavigation from "../../components/MainPage/TopNavigation";
import { stateContext } from "../../StateManagement/context";
import { MainPageBackground } from "./styledMainPage";

const MainPage = () => {
  const { state, dispatch } = useContext(stateContext)
  console.log(state,"state")
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
