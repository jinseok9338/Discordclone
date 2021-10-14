import { StyledSelectButtonContainer, StyledSelectButton } from "../../MakeChat/StyledMakeChat";
import styled from "styled-components";

const StyledP = styled.p`
font-size:0.8rem;
margin:0;
`

function SendFriendsRequestButton() {

    return (
        <StyledSelectButtonContainer>
            <StyledSelectButton ><StyledP >Send a Friend Request</StyledP></StyledSelectButton>
        </StyledSelectButtonContainer>);
}

export default SendFriendsRequestButton;
