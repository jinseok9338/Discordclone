import styled from "styled-components";
import TopbarAction from "./TopBarAction";

const StyledTopbarBox = styled.div`
width: 1608px;
height: 48px;
background: #36393F;
display:flex;
justify-content: center;
align-items: center;

`;

const StyledTopbarInnerBox = styled.div`
width: 1573px;
height: 24px;
display:flex;
`

const TopbarBoxHeadingDiv = styled.div`
display:flex;
align-items: center;
width: 103px;
height: 22px;
border-right: solid;
border-color: #42454A;
`

const Icon = () => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.77528 2H1C1 10.6232 4.77528 13.744 6.66292 14.0725V19H22C22 12.5942 17.2809 12.5942 13.9775 12.5942C6.66292 12.5942 4.77528 6.43478 4.77528 2Z" fill="#72767D" />
        <path d="M13.9775 2.5C19.6405 2.5 19.6405 11.1232 13.9775 11.1232C8.0867 11.1232 8.31461 2.5 13.9775 2.5Z" fill="#72767D" />
    </svg>
)

const TopbarBoxHeadingP = styled.p`
color:white;
font-weight:bold;
font-size:1rem;
position:relative;
left:0.6rem;
`

const TopbarBoxHeading = ({children}:any) => (
    <TopbarBoxHeadingDiv>
        <Icon />
        <TopbarBoxHeadingP>Friends</TopbarBoxHeadingP>
    </TopbarBoxHeadingDiv>
)

function TopbarBox() {
    return (
        <StyledTopbarBox>
            <StyledTopbarInnerBox>
                <TopbarBoxHeading />
                <TopbarAction />
            </StyledTopbarInnerBox> 
        </StyledTopbarBox>
    )
}

export default TopbarBox