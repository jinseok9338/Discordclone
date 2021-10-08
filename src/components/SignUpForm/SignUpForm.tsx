import styled from "styled-components"

const StyledLoginFormContainer = styled.div`
width: 400px;
height: 498px;
display:flex;
flex-direction: column;
align-items: center;
`


const DiscordIcon = () => (
    <svg width="256px" height="293px" viewBox="0 0 256 293" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
        <g>
            <path d="M226.011429,0 L29.9885714,0 C13.4582857,0 0,13.4582857 0,30.1348571 L0,227.913143 C0,244.589714 13.4582857,258.048 29.9885714,258.048 L195.876571,258.048 L188.123429,230.985143 L206.848,248.393143 L224.548571,264.777143 L256,292.571429 L256,30.1348571 C256,13.4582857 242.541714,0 226.011429,0 Z M169.545143,191.049143 C169.545143,191.049143 164.278857,184.758857 159.890286,179.2 C179.053714,173.787429 186.368,161.792 186.368,161.792 C180.370286,165.741714 174.665143,168.521143 169.545143,170.422857 C162.230857,173.494857 155.209143,175.542857 148.333714,176.713143 C134.290286,179.346286 121.417143,178.614857 110.445714,176.566857 C102.107429,174.957714 94.9394286,172.617143 88.9417143,170.276571 C85.5771429,168.96 81.92,167.350857 78.2628571,165.302857 C77.824,165.010286 77.3851429,164.864 76.9462857,164.571429 C76.6537143,164.425143 76.5074286,164.278857 76.3611429,164.132571 C73.728,162.669714 72.2651429,161.645714 72.2651429,161.645714 C72.2651429,161.645714 79.2868571,173.348571 97.8651429,178.907429 C93.4765714,184.466286 88.064,191.049143 88.064,191.049143 C55.7348571,190.025143 43.4468571,168.813714 43.4468571,168.813714 C43.4468571,121.709714 64.512,83.5291429 64.512,83.5291429 C85.5771429,67.7302857 105.618286,68.1691429 105.618286,68.1691429 L107.081143,69.9245714 C80.7497143,77.5314286 68.608,89.088 68.608,89.088 C68.608,89.088 71.8262857,87.3325714 77.2388571,84.8457143 C92.8914286,77.9702857 105.325714,76.0685714 110.445714,75.6297143 C111.323429,75.4834286 112.054857,75.3371429 112.932571,75.3371429 C121.856,74.1668571 131.949714,73.8742857 142.482286,75.0445714 C156.379429,76.6537143 171.300571,80.7497143 186.514286,89.088 C186.514286,89.088 174.957714,78.1165714 150.089143,70.5097143 L152.137143,68.1691429 C152.137143,68.1691429 172.178286,67.7302857 193.243429,83.5291429 C193.243429,83.5291429 214.308571,121.709714 214.308571,168.813714 C214.308571,168.813714 201.874286,190.025143 169.545143,191.049143 Z M101.522286,122.733714 C93.184,122.733714 86.6011429,130.048 86.6011429,138.971429 C86.6011429,147.894857 93.3302857,155.209143 101.522286,155.209143 C109.860571,155.209143 116.443429,147.894857 116.443429,138.971429 C116.589714,130.048 109.860571,122.733714 101.522286,122.733714 M154.916571,122.733714 C146.578286,122.733714 139.995429,130.048 139.995429,138.971429 C139.995429,147.894857 146.724571,155.209143 154.916571,155.209143 C163.254857,155.209143 169.837714,147.894857 169.837714,138.971429 C169.837714,130.048 163.254857,122.733714 154.916571,122.733714" fill="#7289DA"></path>
        </g>
    </svg>
)

const InputContainer = styled.div`
width: 100%;
height: 45px;
border: 1px solid #FFFFFF;
box-sizing: border-box;
border-radius: 4px;
margin-top:1rem;
display: flex;
align-items: center;
`
const StyledIcon = styled.svg`
margin-left:1rem;
`

const UserIcon = () => (
    <StyledIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6903 13.4763C15.0652 12.8512 14.2174 12.5 13.3333 12.5H6.66666C5.78261 12.5 4.93476 12.8512 4.30964 13.4763C3.68452 14.1014 3.33333 14.9493 3.33333 15.8333V17.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M10 9.16667C11.841 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.841 2.5 10 2.5C8.15906 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15906 9.16667 10 9.16667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </StyledIcon>
)

const PasswordIcon = () => (
    <StyledIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8333 9.16667H4.16667C3.24619 9.16667 2.5 9.91286 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91286 16.7538 9.16667 15.8333 9.16667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M5.83333 9.16667V5.83333C5.83333 4.72827 6.27232 3.66846 7.05372 2.88706C7.83512 2.10565 8.89493 1.66667 9.99999 1.66667C11.1051 1.66667 12.1649 2.10565 12.9463 2.88706C13.7277 3.66846 14.1667 4.72827 14.1667 5.83333V9.16667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
    </StyledIcon>

)

const Input = styled.input`
width:100%;
margin-left: 1rem;
background-color: transparent;
outline:none;
:focus{
    outline: none;
}
box-shadow: none;
border-width:0px;
border:none;
margin-top:0.1rem;

`

const StyledButton = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
border-radius: 4px;
width:100%;
height: 45px;
margin-top:2rem;
display:flex;
justify-content: center;
align-items: center;
`
const Login = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 20px;
/* identical to box height, or 125% */
text-align: center;
text-transform: uppercase;

color: #2148C0;
`


const WantToSignUp = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
/* identical to box height */
margin-top:2.5rem;
text-align: center;
color: #FFFFFF;
`

const ErrorSpan = styled.span`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 20px;
/* identical to box height */
text-align: center;
color: #851919;
`



const SignUpForm = () => {
    return (
        <StyledLoginFormContainer>
            <DiscordIcon />
            <InputContainer>
                <UserIcon />
                <Input placeholder="Email" type="text" />
            </InputContainer>
            <InputContainer>
                <PasswordIcon />
                <Input placeholder="PassWord" type="password" />
            </InputContainer>
            <InputContainer>
                <PasswordIcon />
                <Input placeholder="Confirm PassWord" type="password" />
            </InputContainer>
            <ErrorSpan>Something Happened</ErrorSpan>
            <StyledButton>
                <Login>SignUp</Login>
            </StyledButton>
            <WantToSignUp>Already Have an Account?</WantToSignUp>
        </StyledLoginFormContainer>
    )
}

export default SignUpForm