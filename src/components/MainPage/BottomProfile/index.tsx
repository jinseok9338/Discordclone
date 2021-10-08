import React from "react";
import Icons from "./icons";
import Profile from "./Profile";
import { StyledBottomProfile } from "./StyledBottomProfile";

function BottomProfile() {
  return (
    <StyledBottomProfile>
      <Profile />
      <Icons />
    </StyledBottomProfile>
  );
}

export default BottomProfile;
