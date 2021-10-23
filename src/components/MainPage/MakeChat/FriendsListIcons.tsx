import { useEffect, useState } from "react";
import useSelected from "../../../hooks/useSelected";
import { userType } from "../../../Types/userType";
import FriendsListIconAvatars from "./FriendsListIconAvatars";
import { StyledFriendsListIconsContainer } from "./StyledMakeChat";

function FriendsListIcons({ searchTerm }: { searchTerm: string }) {

  const { toggleSelected, selected } = useSelected();
  const [filteredFriends, setFilteredFriends] = useState([] as userType[]);

  // useEffect(() => {
  //   if (searchTerm.replace(/\s/g, "").length > 0) {
  //     setFilteredFriends(
  //       mainState?.user?.friends?.filter((friend) =>
  //         friend.displayName.includes(searchTerm)
  //       )
  //     );
  //   } else {
  //     setFilteredFriends(mainState?.user?.friends?.slice(0, 9));
  //   }
  // }, [searchTerm]);

  return (
    <StyledFriendsListIconsContainer>
      {filteredFriends?.length > 0 &&
        filteredFriends?.map((friend) => (
          <div onClick={() => toggleSelected(friend)}>
            <FriendsListIconAvatars
              src={friend.profilePic}
              displayName={friend.displayName}
              selected={
                !!selected.find((item) => item.userId === friend.userId)
              }
            />
          </div>
        ))}
    </StyledFriendsListIconsContainer>
  );
}

export default FriendsListIcons;
