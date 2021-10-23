import React from 'react'
import styled from "styled-components";

const StyledInputBoxContainer = styled.div.attrs(
    (props: { open:boolean }) => props
)`
  width: 1180px;
  height: 5rem;
background-Color: #6588DE;
border-radius: 15px;
transform: ${(props) => props.open ? 'translateY(0)' : 'translateY(300%)'};
position:relative;
bottom:1rem;
transition: all ease 0.5s 0s;
display:flex;

`;

const AddFileBox = styled.div`
width:3rem;
height:4rem
`

interface ChatFileInputProps {
    open:boolean 
}

function ChatFileInput({ open}: ChatFileInputProps) {
    return (
        <StyledInputBoxContainer open ={open}>
            
        </StyledInputBoxContainer>
    )
}

export default ChatFileInput
