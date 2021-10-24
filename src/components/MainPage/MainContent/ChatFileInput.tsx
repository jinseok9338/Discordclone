import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getFileType } from "../../../utils/utils";
import ReactTooltip from "react-tooltip";

const StyledInputBoxContainer = styled.div.attrs(
  (props: { open: boolean }) => props
)`
  width: 1180px;
  height: 5rem;
  background-color: #6588de;
  border-radius: 15px;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(300%)")};
  position: absolute;
  bottom: 50px;
  transition: all ease 0.5s 0s;
  display: flex;
  z-index: ${(props) => (props.open ? "10" : "-1")};
  align-items: center;
`;

const AddFileBox = styled.div`
  position: relative;
  width: 4rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
`;
const FileImage = styled.img`
  width: 3rem;
  height: 3rem;
`;

const AddFile = styled.div`
  width: 4rem;
  height: 4rem;
  border: 1px dashed #f9fbfb;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Title = styled.span`
  font-size: 0.7rem;
  color: white;
  text-align: center;
`;

const CloseButton = styled.svg`
  position: absolute;
  height: 16px;
  width: 16px;
  z-index: auto;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const SendBox = styled(AddFileBox)`
  width: 4rem;
  height: 4rem;
  margin-left: auto;
  justify-content: center;
  margin-right: 1rem;
  cursor: pointer;
`;

const CloseIcon = ({ children }: any) => (
  <CloseButton
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="12" fill="#F5F8F9" />
    <path
      d="M15.3904 8.07691C15.5122 8.12768 15.6228 8.20207 15.7158 8.2958C15.8095 8.38876 15.8839 8.49936 15.9347 8.62122C15.9855 8.74308 16.0116 8.87379 16.0116 9.0058C16.0116 9.13781 15.9855 9.26852 15.9347 9.39038C15.8839 9.51223 15.8095 9.62284 15.7158 9.7158L13.4158 12.0058L15.7158 14.2958C15.8095 14.3888 15.8839 14.4994 15.9347 14.6212C15.9855 14.7431 16.0116 14.8738 16.0116 15.0058C16.0116 15.1378 15.9855 15.2685 15.9347 15.3904C15.8839 15.5122 15.8095 15.6228 15.7158 15.7158C15.6228 15.8095 15.5122 15.8839 15.3904 15.9347C15.2685 15.9855 15.1378 16.0116 15.0058 16.0116C14.8738 16.0116 14.7431 15.9855 14.6212 15.9347C14.4994 15.8839 14.3888 15.8095 14.2958 15.7158L12.0058 13.4158L9.7158 15.7158C9.62284 15.8095 9.51223 15.8839 9.39038 15.9347C9.26852 15.9855 9.13781 16.0116 9.0058 16.0116C8.87379 16.0116 8.74308 15.9855 8.62122 15.9347C8.49936 15.8839 8.38876 15.8095 8.2958 15.7158C8.20207 15.6228 8.12768 15.5122 8.07691 15.3904C8.02614 15.2685 8 15.1378 8 15.0058C8 14.8738 8.02614 14.7431 8.07691 14.6212C8.12768 14.4994 8.20207 14.3888 8.2958 14.2958L10.5958 12.0058L8.2958 9.7158C8.10749 9.52749 8.00171 9.2721 8.00171 9.0058C8.00171 8.7395 8.10749 8.4841 8.2958 8.2958C8.4841 8.10749 8.7395 8.00171 9.0058 8.00171C9.2721 8.00171 9.52749 8.10749 9.7158 8.2958L12.0058 10.5958L14.2958 8.2958C14.3888 8.20207 14.4994 8.12768 14.6212 8.07691C14.7431 8.02614 14.8738 8 15.0058 8C15.1378 8 15.2685 8.02614 15.3904 8.07691Z"
      fill="#6563FF"
    />
  </CloseButton>
);

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 10.4241 23.6896 8.8637 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40041 18.0481 1.5165 16.5922 0.913445C15.1363 0.310389 13.5759 0 12 0ZM12 21.6C10.1013 21.6 8.24524 21.037 6.66653 19.9821C5.08782 18.9272 3.85736 17.4279 3.13076 15.6738C2.40416 13.9196 2.21405 11.9893 2.58447 10.1271C2.95488 8.26491 3.8692 6.55436 5.21178 5.21177C6.55436 3.86919 8.26492 2.95488 10.1271 2.58446C11.9894 2.21404 13.9196 2.40415 15.6738 3.13076C17.4279 3.85736 18.9272 5.08781 19.9821 6.66652C21.037 8.24524 21.6 10.1013 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6ZM16.8 10.8H13.2V7.2C13.2 6.88174 13.0736 6.57651 12.8485 6.35147C12.6235 6.12643 12.3183 6 12 6C11.6817 6 11.3765 6.12643 11.1515 6.35147C10.9264 6.57651 10.8 6.88174 10.8 7.2V10.8H7.2C6.88174 10.8 6.57652 10.9264 6.35148 11.1515C6.12643 11.3765 6 11.6817 6 12C6 12.3183 6.12643 12.6235 6.35148 12.8485C6.57652 13.0736 6.88174 13.2 7.2 13.2H10.8V16.8C10.8 17.1183 10.9264 17.4235 11.1515 17.6485C11.3765 17.8736 11.6817 18 12 18C12.3183 18 12.6235 17.8736 12.8485 17.6485C13.0736 17.4235 13.2 17.1183 13.2 16.8V13.2H16.8C17.1183 13.2 17.4235 13.0736 17.6485 12.8485C17.8736 12.6235 18 12.3183 18 12C18 11.6817 17.8736 11.3765 17.6485 11.1515C17.4235 10.9264 17.1183 10.8 16.8 10.8Z"
      fill="#F9FBFB"
    />
  </svg>
);

interface ChatFileInputProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ChatFileInput({ open, setOpen }: ChatFileInputProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);

  console.log(files);

  const triggerClick = () => {
    inputRef.current!.click();
  };

  const imageSelect = (file: File) => {
    return getFileType(file) === "audio"
      ? "image/fileIcon/audio.png"
      : getFileType(file) === "video"
      ? "image/fileIcon/video.png"
      : getFileType(file) === "pdf"
      ? "image/fileIcon/pdf.png"
      : getFileType(file) === "image"
      ? "image/fileIcon/image.png"
      : "image/fileIcon/other.png";
  };

  const UploadFile = (Files: File[]) => {
    setFiles([]);
    setOpen(false);
  };

  const handleRemoveItem = (File: File) => {
    setFiles(files.filter((file, i) => i !== files.indexOf(File)));
  };

  useEffect(() => {
    if (!open) {
      setFiles([]);
    }
  }, [open]);

  return (
    <>
      <StyledInputBoxContainer open={open}>
        <AddFileBox data-tip="Add File" onClick={() => triggerClick()}>
          <AddFile>
            <PlusIcon />
            <input
              id="selectImage"
              hidden
              type="file"
              ref={inputRef}
              onChange={(e) => {
                console.log(e.target.files!);
                setFiles([...files, e.target.files![0]]);
              }}
              onClick={(e) => {
                const element = e.target as HTMLInputElement;
                element.value = "";
              }}
            />
          </AddFile>
        </AddFileBox>
        {files.length > 0 && (
          <>
            {files.map((File) => (
              <AddFileBox>
                <div onClick={() => handleRemoveItem(File)}>
                  <CloseIcon />
                </div>
                <FileImage src={`${imageSelect(File)}`} />
                <Title>{File.name}</Title>
              </AddFileBox>
            ))}
            <SendBox data-tip="Upload" onClick={() => UploadFile(files)}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.7063 12.7135C19.8 12.6205 19.8743 12.5099 19.925 12.388C19.9757 12.2661 20.0018 12.1354 20.0017 12.0033C20.0016 11.8713 19.9754 11.7406 19.9245 11.6188C19.8737 11.497 19.7992 11.3864 19.7055 11.2935L16.7036 8.29536C16.6106 8.20169 16.4999 8.12736 16.3781 8.07667C16.2562 8.02598 16.1254 7.99992 15.9934 8C15.8614 8.00008 15.7307 8.0263 15.6089 8.07714C15.4871 8.12798 15.3765 8.20245 15.2836 8.29623L12.2855 11.2981C12.0973 11.4865 11.9916 11.7419 11.9918 12.0082C11.992 12.2746 12.0979 12.5299 12.2863 12.7181C12.4747 12.9063 12.7302 13.0119 12.9965 13.0117C13.2628 13.0116 13.5181 12.9056 13.7063 12.7172L14.9955 11.4164L15.0026 23.0064C15.0028 23.2716 15.1083 23.5259 15.2959 23.7133C15.4836 23.9008 15.738 24.006 16.0032 24.0058C16.2685 24.0056 16.5227 23.9001 16.7102 23.7125C16.8976 23.5248 17.0028 23.2704 17.0026 23.0052L16.9955 11.4152L18.2863 12.7144C18.3793 12.8081 18.49 12.8824 18.6119 12.9331C18.7338 12.9838 18.8645 13.0098 18.9965 13.0098C19.1285 13.0097 19.2592 12.9835 19.381 12.9326C19.5029 12.8818 19.6134 12.8073 19.7063 12.7135Z"
                  fill="#FAFCFC"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="15"
                  stroke="#FAFCFC"
                  stroke-width="2"
                />
              </svg>
            </SendBox>
          </>
        )}
      </StyledInputBoxContainer>
      <ReactTooltip />
      <ReactTooltip />
    </>
  );
}

export default ChatFileInput;
