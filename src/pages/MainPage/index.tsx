import { useContext, useEffect, useState } from "react";
import BottomProfile from "../../components/MainPage/BottomProfile";
import ConversationBox from "../../components/MainPage/ConvsersationBox";
import MainContent from "../../components/MainPage/MainContent";
import ServerList from "../../components/MainPage/ServerList";
import TopNavigation from "../../components/MainPage/TopNavigation";
import { stateContext } from "../../StateManagement/context";
import useMaintainState from "../../hooks/useMaintainState";
import { chatType } from "../../Types/chatType";
import { userProfileType } from "../../Types/userType";
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
