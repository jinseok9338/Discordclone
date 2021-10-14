import FriendsListIconAvatars from "../../MakeChat/FriendsListIconAvatars";
import { StyledFriendsListIconsContainer } from "../../MakeChat/StyledMakeChat";

function SuggestedFriendsList() {

    return (
        <StyledFriendsListIconsContainer>
    
                <div >
                    <FriendsListIconAvatars src={`/image/avatar1.png`} displayName={`hey`} selected={true} />
                </div>
    
        </StyledFriendsListIconsContainer>
    );
}

export default SuggestedFriendsList;
