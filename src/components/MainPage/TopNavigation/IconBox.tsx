import styled from "styled-components";

const StyledIconBoxContainer = styled.div`
  width: 119px;
  height: 24px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const CreateConversationIcon = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.998 0V3H24.998V5H21.998V8H19.998V5H16.998V3H19.998V0H21.998ZM3.99805 20V24L9.33205 20H15.998C17.102 20 17.998 19.103 17.998 18V9C17.998 7.896 17.102 7 15.998 7H2.99805C1.89405 7 0.998047 7.896 0.998047 9V18C0.998047 19.103 1.89405 20 2.99805 20H3.99805Z"
      fill="#C7C9CB"
    /> 
  </svg>
);

const QuestionMarkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.486 0 0 4.487 0 10C0 15.515 4.486 20 10 20C15.514 20 20 15.515 20 10C20 4.487 15.514 0 10 0ZM10 16.25C9.31 16.25 8.75 15.691 8.75 15C8.75 14.31 9.31 13.75 10 13.75C10.69 13.75 11.25 14.31 11.25 15C11.25 15.691 10.69 16.25 10 16.25ZM11 11.875V13H9V10H10C11.104 10 12 9.103 12 8C12 6.896 11.104 6 10 6C8.896 6 8 6.896 8 8H6C6 5.795 7.795 4 10 4C12.205 4 14 5.795 14 8C14 9.861 12.723 11.429 11 11.875Z"
      fill="#C7C9CB"
    />
  </svg>
);

const IconBox = () => {
  return (
    <StyledIconBoxContainer>
      <CreateConversationIcon />
      <QuestionMarkIcon />
    </StyledIconBoxContainer>
  );
};

export default IconBox;
