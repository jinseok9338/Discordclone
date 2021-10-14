import {
  StyledSearchBarContainer,
  StyledSearchBarInput,
} from "./StyledMakeChat";

interface SearchBarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar = ({
  setSearchTerm
}: SearchBarProps) => {
  return (
    <StyledSearchBarContainer>
      <StyledSearchBarInput onChange={(e)=>setSearchTerm(e.target.value)} />
    </StyledSearchBarContainer>
  );
};

export default SearchBar;
