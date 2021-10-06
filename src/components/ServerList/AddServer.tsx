import styled from "styled-components";
import {NodePlus} from '@styled-icons/bootstrap'



const StyledAddButton = styled.div`
 position:relative;
 top:1.5rem;
width: 54px;
height: 54px;
background: #36393F;
border-radius: 50%;
display:flex;
justify-content:center;
align-items:center
`;

const PlusICon = styled(NodePlus)`
  color: #3BA55D;
  width: 2.2rem;
height: 2.2rem;
`


const AddServer = () => {
    return (
        <StyledAddButton>
            <PlusICon/>
        </StyledAddButton>
    )
}

export default AddServer