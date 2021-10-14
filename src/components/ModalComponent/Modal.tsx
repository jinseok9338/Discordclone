import SearchBar from "../MainPage/MakeChat/SearchBar";
import { StyledMakeChat } from "../MainPage/MakeChat/StyledMakeChat";


interface ModalProps {
    searchTerm: string;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>
    children: React.ReactNode
}

const  Modal = ({ searchTerm, setSearchTerm, children }: ModalProps) => (<StyledMakeChat>
    <SearchBar setSearchTerm={setSearchTerm} />
    {children}
</StyledMakeChat>)

export default Modal