import styled from "styled-components";
import Avatar from "../Avatar";

const AvatarGroupDivOutLayer = styled.div.attrs((props: { id: number }) => props)`
  width: 52px;
  height: 52px;
  position:relative;
  display:flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  top:${props => props.id === 0 ? "0rem" : "1rem"};
  background: rgba(88, 101, 242, 0.4);
border-radius: 15px;
`;

const AvatarGroupDivInLayer = styled.div.attrs((props: { id: number }) => props)`
 width: 40px;
height: 40px;
  vertical-align: middle;
  background: rgba(239, 240, 245, 0.4);
    display:grid;
  grid-template-columns: 200px 200px;
  grid-row: auto auto;
  grid-column-gap: 0.2rem;
  grid-row-gap: 0.2rem;
`;



const AvatarGroup = ({id}:{id:number}) => {
 
    return (
      <AvatarGroupDivOutLayer id={id}>
        <AvatarGroupDivInLayer >
          <Avatar id={4} />
          <Avatar id={4} />
          <Avatar id={4} />
          <Avatar id={4} />
        </AvatarGroupDivInLayer >
      </AvatarGroupDivOutLayer>
        
    )
}

export default AvatarGroup