import styled from "styled-components";

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
`

const TopbarBoxHeading = styled.div`
width: 103px;
height: 22px;
border-right: 2px;
border-color: #42454A;
`

function TopbarBox() {
    return (
        <StyledTopbarBox>
            <StyledTopbarInnerBox>
                <TopbarBoxHeading>

                </TopbarBoxHeading>
            </StyledTopbarInnerBox> 
        </StyledTopbarBox>
    )
}

export default TopbarBox