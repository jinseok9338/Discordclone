import styled, { keyframes } from "styled-components";


const ProgressBarWrapper = styled.div`
  margin-top: 2px;
  border: 2px solid lightblue;
  height: 5px;
  width: 4rem;
  border-radius: 15px;
`
const fill = keyframes`
  0% {width: 0%}
  100% {width: 100%} 
`;

const Progressbar = styled.div`
  background: lightblue;
  height: 100%; 
  animation: ${fill} 2s linear 10; 
`


function ProgressBar() {
    return (
        <ProgressBarWrapper>
            <Progressbar />
        </ProgressBarWrapper>
    )
}

export default ProgressBar
