import React from 'react'
import styled from "styled-components";

const StyledChatsInputContainer = styled.div`
width: 1180px;
 height: 40px;
 display :flex;
 align-items: center;
 border: 1px solid rgba(150, 169, 186, 0.7);
box-sizing: border-box;
border-radius: 14px;
background: #FDFDFD;
`;

const StyledIcon = styled.svg`
margin-left: 0.7rem;
`

const FileIcon = () => (<StyledIcon width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.5461 10.585L9.25481 16.8865C8.43003 17.6195 7.35637 18.0096 6.25343 17.9772C5.1505 17.9447 4.10164 17.4921 3.32141 16.7118C2.54118 15.9316 2.08854 14.8827 2.05607 13.7798C2.0236 12.6769 2.41376 11.6032 3.14675 10.7784L11.2908 2.63436C11.7771 2.17248 12.4221 1.91496 13.0927 1.91496C13.7633 1.91496 14.4084 2.17248 14.8946 2.63436C15.3683 3.11444 15.6339 3.76177 15.6339 4.43623C15.6339 5.1107 15.3683 5.75803 14.8946 6.23811L7.87031 13.2522C7.8008 13.3271 7.71721 13.3875 7.62434 13.4301C7.53146 13.4726 7.43112 13.4965 7.32902 13.5003C7.22693 13.504 7.12509 13.4877 7.02932 13.4521C6.93355 13.4165 6.84573 13.3624 6.77086 13.2929C6.696 13.2234 6.63556 13.1398 6.593 13.0469C6.55043 12.9541 6.52658 12.8537 6.5228 12.7516C6.51902 12.6495 6.53538 12.5477 6.57096 12.4519C6.60653 12.3562 6.66063 12.2683 6.73014 12.1935L11.9525 6.98126C12.1442 6.78956 12.2519 6.52957 12.2519 6.25847C12.2519 5.98737 12.1442 5.72738 11.9525 5.53568C11.7608 5.34399 11.5008 5.2363 11.2297 5.2363C10.9586 5.2363 10.6987 5.34399 10.507 5.53568L5.28457 10.7683C5.02325 11.0275 4.81584 11.336 4.6743 11.6758C4.53276 12.0157 4.45989 12.3802 4.45989 12.7483C4.45989 13.1164 4.53276 13.4809 4.6743 13.8207C4.81584 14.1606 5.02325 14.469 5.28457 14.7283C5.81839 15.2368 6.52736 15.5204 7.2646 15.5204C8.00183 15.5204 8.71081 15.2368 9.24463 14.7283L16.2587 7.70405C17.0679 6.83563 17.5084 5.68703 17.4875 4.50023C17.4666 3.31343 16.9858 2.18108 16.1465 1.34176C15.3071 0.502431 14.1748 0.0216535 12.988 0.000713708C11.8012 -0.020226 10.6526 0.420307 9.78417 1.2295L1.64009 9.37358C0.541863 10.5899 -0.0446844 12.1831 0.00265827 13.8212C0.0500009 15.4593 0.727583 17.016 1.89423 18.1669C3.06087 19.3178 4.62661 19.9742 6.2652 19.9993C7.9038 20.0243 9.48888 19.4162 10.6902 18.3015L16.9917 12.0102C17.0866 11.9153 17.1619 11.8026 17.2133 11.6786C17.2646 11.5546 17.2911 11.4217 17.2911 11.2874C17.2911 11.1532 17.2646 11.0203 17.2133 10.8963C17.1619 10.7723 17.0866 10.6596 16.9917 10.5647C16.8968 10.4697 16.7841 10.3944 16.6601 10.3431C16.536 10.2917 16.4031 10.2653 16.2689 10.2653C16.1347 10.2653 16.0017 10.2917 15.8777 10.3431C15.7537 10.3944 15.641 10.4697 15.5461 10.5647V10.585Z" fill="#6588DE" />
</StyledIcon>
)

const MicIcon = () => (
    <StyledIcon width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.27273 12.7273C8.23715 12.7273 9.16207 12.3442 9.84402 11.6622C10.526 10.9803 10.9091 10.0553 10.9091 9.09091V3.63636C10.9091 2.67194 10.526 1.74702 9.84402 1.06507C9.16207 0.383116 8.23715 0 7.27273 0C6.3083 0 5.38338 0.383116 4.70143 1.06507C4.01948 1.74702 3.63636 2.67194 3.63636 3.63636V9.09091C3.63636 10.0553 4.01948 10.9803 4.70143 11.6622C5.38338 12.3442 6.3083 12.7273 7.27273 12.7273ZM5.45455 3.63636C5.45455 3.15415 5.6461 2.69169 5.98708 2.35071C6.32805 2.00974 6.79052 1.81818 7.27273 1.81818C7.75494 1.81818 8.2174 2.00974 8.55838 2.35071C8.89935 2.69169 9.09091 3.15415 9.09091 3.63636V9.09091C9.09091 9.57312 8.89935 10.0356 8.55838 10.3766C8.2174 10.7175 7.75494 10.9091 7.27273 10.9091C6.79052 10.9091 6.32805 10.7175 5.98708 10.3766C5.6461 10.0356 5.45455 9.57312 5.45455 9.09091V3.63636ZM14.5455 9.09091C14.5455 8.8498 14.4497 8.61857 14.2792 8.44808C14.1087 8.2776 13.8775 8.18182 13.6364 8.18182C13.3953 8.18182 13.164 8.2776 12.9935 8.44808C12.8231 8.61857 12.7273 8.8498 12.7273 9.09091C12.7273 10.5375 12.1526 11.9249 11.1297 12.9479C10.1067 13.9708 8.71936 14.5455 7.27273 14.5455C5.82609 14.5455 4.43871 13.9708 3.41578 12.9479C2.39286 11.9249 1.81818 10.5375 1.81818 9.09091C1.81818 8.8498 1.7224 8.61857 1.55192 8.44808C1.38143 8.2776 1.1502 8.18182 0.909091 8.18182C0.667985 8.18182 0.436754 8.2776 0.266267 8.44808C0.0957791 8.61857 0 8.8498 0 9.09091C0.00160527 10.8612 0.648838 12.5701 1.82036 13.8972C2.99188 15.2244 4.60725 16.0787 6.36364 16.3V18.1818H4.54545C4.30435 18.1818 4.07312 18.2776 3.90263 18.4481C3.73214 18.6186 3.63636 18.8498 3.63636 19.0909C3.63636 19.332 3.73214 19.5632 3.90263 19.7337C4.07312 19.9042 4.30435 20 4.54545 20H10C10.2411 20 10.4723 19.9042 10.6428 19.7337C10.8133 19.5632 10.9091 19.332 10.9091 19.0909C10.9091 18.8498 10.8133 18.6186 10.6428 18.4481C10.4723 18.2776 10.2411 18.1818 10 18.1818H8.18182V16.3C9.9382 16.0787 11.5536 15.2244 12.7251 13.8972C13.8966 12.5701 14.5438 10.8612 14.5455 9.09091Z" fill="#6588DE" />
    </StyledIcon>

)

const StyledChatsInput = styled.input`
width: 132px;
height: 18px;
color: black;
outline:none
  &:focus {
    outline: none;
  }
  margin-left:0.7rem;
`
const SendButtonContainer = styled.div`
width: 108px;
height: 40px;
background: #6588DE;
border-radius: 14px;
margin-left:auto;
display:flex;
justify-content: center;
align-items: center;
`
const SendP = styled.p`
position:relative;
top:-0.1rem;
width: 31px;
height: 18px;
color:#FDFDFE;
margin:0;
margin-right:1rem;
`

const SendIcon = () => (<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.3393 7.31637L4.33927 0.314359C3.78676 0.0392893 3.16289 -0.0586374 2.55271 0.0339303C1.94252 0.126498 1.37573 0.405055 0.929602 0.831623C0.483474 1.25819 0.179724 1.81201 0.0597636 2.41757C-0.0601964 3.02313 0.00947219 3.65097 0.259271 4.21548L2.65927 9.58702C2.71373 9.71689 2.74177 9.85631 2.74177 9.99714C2.74177 10.138 2.71373 10.2774 2.65927 10.4073L0.259271 15.7788C0.055971 16.2356 -0.0299735 16.7361 0.00924794 17.2346C0.0484693 17.7331 0.211613 18.2139 0.483853 18.6333C0.756092 19.0527 1.1288 19.3974 1.56809 19.6361C2.00739 19.8748 2.49935 19.9999 2.99927 20C3.4675 19.9953 3.92876 19.886 4.34927 19.6799L18.3493 12.6779C18.8459 12.428 19.2633 12.045 19.555 11.5717C19.8466 11.0983 20.0011 10.5532 20.0011 9.99714C20.0011 9.44108 19.8466 8.89597 19.555 8.4226C19.2633 7.94924 18.8459 7.56625 18.3493 7.31637H18.3393ZM17.4493 10.8874L3.44927 17.8894C3.26543 17.9777 3.059 18.0077 2.85766 17.9753C2.65631 17.9429 2.46968 17.8497 2.32278 17.7082C2.17589 17.5667 2.07575 17.3837 2.0358 17.1836C1.99585 16.9836 2.018 16.7761 2.09927 16.589L4.48927 11.2175C4.52021 11.1458 4.54692 11.0723 4.56927 10.9974H11.4593C11.7245 10.9974 11.9788 10.892 12.1664 10.7044C12.3539 10.5169 12.4593 10.2624 12.4593 9.99714C12.4593 9.73184 12.3539 9.47742 12.1664 9.28983C11.9788 9.10223 11.7245 8.99685 11.4593 8.99685H4.56927C4.54692 8.92199 4.52021 8.84851 4.48927 8.77678L2.09927 3.40524C2.018 3.21815 1.99585 3.01068 2.0358 2.81064C2.07575 2.61061 2.17589 2.42757 2.32278 2.28607C2.46968 2.14458 2.65631 2.05139 2.85766 2.019C3.059 1.98661 3.26543 2.01658 3.44927 2.10487L17.4493 9.10688C17.6131 9.19082 17.7505 9.31835 17.8465 9.47543C17.9425 9.63251 17.9933 9.81304 17.9933 9.99714C17.9933 10.1812 17.9425 10.3618 17.8465 10.5188C17.7505 10.6759 17.6131 10.8034 17.4493 10.8874Z" fill="#FDFDFE" />
</svg>
)


function ChatsInput() {
    return (
        <StyledChatsInputContainer>
            <FileIcon />
            <MicIcon />
            <StyledChatsInput placeholder="Type a message ..." />
            <SendButtonContainer>
                <SendP>Send</SendP>
                <SendIcon/>
            </SendButtonContainer>
        </StyledChatsInputContainer>
    )
}

export default ChatsInput