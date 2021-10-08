import React from "react";
import styled from "styled-components";

const OtherPersonChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1190px;
  justify-content: flex-start;
  margin-left: 3rem;
  margin-bottom: 1rem;
`;

const StyledName = styled.p`
  font-size: 1rem;
  color: white;
  margin: 0;
`;
const ChatsContainer = styled.div`
  margin-top: 0.5rem;
  width: 1046px;
  display: flex;
`;
const IconContainer = styled.div`
  width: 46px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Icon = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

const ChatContainer = styled.div`
  margin-left: 0.5rem;
  width: auto;
`;
const ChatBubbleContainer = styled.div`
  padding: 0.5rem;
  width: fit-content;
  max-width: 506px;
  background: #e3f6fc;
  border-radius: 0px 14px 14px 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.5rem;
`;
const ChatBubbleP = styled.p`
  margin: 0;
`;
const ChatBubbleDate = styled.span`
  font-size: 0.7rem;
  margin-left: auto;
`;
const ChatPicturesContainer = styled.div`
  padding: 0.5rem;
  max-width: 992px;
  background: #e3f6fc;
  border-radius: 0px 14px 14px 14px;
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  overflow-y: hidden;
  width: fit-content;
  overflow-x: auto;
  ::-webkit-scrollbar {
    height: 4px;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b8b7b6;
  }
`;
const ChatPictures = styled.img`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const numbers = [1];

function OtherPersonChat() {
  return (
    <OtherPersonChatContainer>
      <StyledName>Jinseok Seo</StyledName>
      <ChatsContainer>
        <IconContainer>
          <Icon src="image/avatar3.png" alt="avatar Image" />
        </IconContainer>
        <ChatContainer>
          <ChatBubbleContainer>
            <ChatBubbleP>Hello There this is the moment</ChatBubbleP>
            <ChatBubbleDate> 3 days ago</ChatBubbleDate>
          </ChatBubbleContainer>
          <ChatBubbleContainer>
            <ChatBubbleP>
              Thjis is the big there alsdiajklan asjkdnkjassn
              asdjdjkndkjasdnjnafnjk adjnajk sndkasn sakdnkjasnd asdnkj asn
            </ChatBubbleP>
            <ChatBubbleDate> 3 days ago</ChatBubbleDate>
          </ChatBubbleContainer>
          <ChatPicturesContainer>
            {numbers.slice(0, 4).map((number) => (
              <ChatPictures
                src={`image/${number}.jpg`}
                alt={number.toString()}
              />
            ))}
            {numbers.length > 4 && <h1>{`+${numbers.length - 4}`}</h1>}
          </ChatPicturesContainer>
        </ChatContainer>
      </ChatsContainer>
    </OtherPersonChatContainer>
  );
}

export default OtherPersonChat;
