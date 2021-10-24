import React from "react";
import styled from "styled-components";

const MeChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 1190px;
  justify-content: flex-start;
  margin-right: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledName = styled.p`
  font-size: 1rem;
  color: white;
  margin-left: auto;
  margin-bottom: 0;
  margin-top: 0;
`;
const ChatsContainer = styled.div`
  margin-top: 0.5rem;
  width: 1046px;
  display: flex;
  align-self: flex-end;
  justify-content: flex-end;
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
  width: auto;
`;
const ChatBubbleContainer = styled.div`
  padding: 0.5rem;
  max-width: 506px;
  width: fit-content;
  background: #f3ba4a;
  border-radius: 14px 0px 14px 14px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
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
  background: #f3ba4a;
  border-radius: 14px 0px 14px 14px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-top: 0.5rem;
  width: fit-content;
  overflow-y: hidden;
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

const numbers = [1, 2];

function MeChat() {
  return (
    <MeChatContainer>
      <StyledName>Jason Jin</StyledName>
      <ChatsContainer>
        <ChatContainer>
          <ChatBubbleContainer>
            <ChatBubbleP>Hello There this is the moment</ChatBubbleP>
            <ChatBubbleDate> 3 days ago</ChatBubbleDate>
          </ChatBubbleContainer>
          <ChatBubbleContainer>
            <ChatBubbleP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
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
        <IconContainer>
          <Icon src="image/avatar1.png" alt="avatar Image" />
        </IconContainer>
      </ChatsContainer>
    </MeChatContainer>
  );
}

export default MeChat;
