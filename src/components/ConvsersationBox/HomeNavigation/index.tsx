import styled from "styled-components";
import FriendsList from "./FriendsList";

export const StyledHomeNavigation = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;
width: 224px;
height:12rem;
position:relative;
top:1rem;
`;



const HomeNavigation = ({children}:any) => {
    
    return (
        <StyledHomeNavigation>
            <FriendsList/>
        </StyledHomeNavigation>
    )
}

export default HomeNavigation