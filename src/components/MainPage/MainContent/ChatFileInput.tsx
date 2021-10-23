import React, { useState } from 'react'
import styled from "styled-components";
import { getFileType } from '../../../utils/utils';

const StyledInputBoxContainer = styled.div.attrs(
    (props: { open:boolean }) => props
)`
  width: 1180px;
  height: 5rem;
background-Color: #6588DE;
border-radius: 15px;
transform: ${(props) => props.open ? 'translateY(0)' : 'translateY(300%)'};
position: absolute;
bottom:50px;
transition: all ease 0.5s 0s;
display:flex;
z-index: ${(props) => props.open ? '10' : '-1'};
align-items: center;
`;

const AddFileBox = styled.div`
width:4rem;
height:4rem;
display:flex;
flex-direction:column;
align-items: center;
margin-left: 1rem;
cursor:pointer;
`
const FileImage = styled.img`
width:3rem;
height:3rem;
`

const AddFile = styled.div`
width:4rem;
height:4rem;
border: 1px dashed #F9FBFB;
box-sizing: border-box;
border-radius: 8px;
display:flex;
align-items: center;
justify-content:center;
`


const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C24 10.4241 23.6896 8.8637 23.0866 7.4078C22.4835 5.95189 21.5996 4.62902 20.4853 3.51472C19.371 2.40041 18.0481 1.5165 16.5922 0.913445C15.1363 0.310389 13.5759 0 12 0ZM12 21.6C10.1013 21.6 8.24524 21.037 6.66653 19.9821C5.08782 18.9272 3.85736 17.4279 3.13076 15.6738C2.40416 13.9196 2.21405 11.9893 2.58447 10.1271C2.95488 8.26491 3.8692 6.55436 5.21178 5.21177C6.55436 3.86919 8.26492 2.95488 10.1271 2.58446C11.9894 2.21404 13.9196 2.40415 15.6738 3.13076C17.4279 3.85736 18.9272 5.08781 19.9821 6.66652C21.037 8.24524 21.6 10.1013 21.6 12C21.6 14.5461 20.5886 16.9879 18.7882 18.7882C16.9879 20.5886 14.5461 21.6 12 21.6ZM16.8 10.8H13.2V7.2C13.2 6.88174 13.0736 6.57651 12.8485 6.35147C12.6235 6.12643 12.3183 6 12 6C11.6817 6 11.3765 6.12643 11.1515 6.35147C10.9264 6.57651 10.8 6.88174 10.8 7.2V10.8H7.2C6.88174 10.8 6.57652 10.9264 6.35148 11.1515C6.12643 11.3765 6 11.6817 6 12C6 12.3183 6.12643 12.6235 6.35148 12.8485C6.57652 13.0736 6.88174 13.2 7.2 13.2H10.8V16.8C10.8 17.1183 10.9264 17.4235 11.1515 17.6485C11.3765 17.8736 11.6817 18 12 18C12.3183 18 12.6235 17.8736 12.8485 17.6485C13.0736 17.4235 13.2 17.1183 13.2 16.8V13.2H16.8C17.1183 13.2 17.4235 13.0736 17.6485 12.8485C17.8736 12.6235 18 12.3183 18 12C18 11.6817 17.8736 11.3765 17.6485 11.1515C17.4235 10.9264 17.1183 10.8 16.8 10.8Z" fill="#F9FBFB" />
    </svg>

)


interface ChatFileInputProps {
    open:boolean 
}

function ChatFileInput({ open }: ChatFileInputProps) {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [files, setFiles] = useState<File[]>([])
    
    console.log(files)

    const triggerClick = ()=> {
        inputRef.current!.click()
    }
    const onChangeHandle = (file:File) => {
        if (!file) {
            return 
        }
        const filelist = files
        filelist.push(file)
        setFiles(filelist)
    }

    const imageSelect = (file: File) => {

        return getFileType(file) === "audio" ? "image/fileIcon/audio.png" : getFileType(file) === "video" ? "image/fileIcon/video.png"
            : getFileType(file) === "pdf" ? "image/fileIcon/pdf.png" : getFileType(file) === "image" ? "image/fileIcon/image.png" : "image/fileIcon/other.png"
    }
       
    return (
        <StyledInputBoxContainer open ={open}>
            <AddFileBox onClick={() => triggerClick()}>
                <AddFile>
                    <PlusIcon />
                    <input id='selectImage' hidden type="file" ref={inputRef} onChange={(e) => onChangeHandle(e.target.files![0])}/> 
                </AddFile>
            </AddFileBox>
            {
                files && files.map((file) => (<AddFileBox>
                    <FileImage src={`${imageSelect(file)}`} />
                </AddFileBox>))
                   
    
    }
        </StyledInputBoxContainer>
    )
}

export default ChatFileInput
