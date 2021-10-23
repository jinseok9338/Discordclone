import { FC, useState } from "react";
import Modal from "../../ModalComponent/Modal";
import FriendsListIcons from "./FriendsListIcons";
import SearchBar from "./SearchBar";
import SelectButton from "./SelectButton";
import { StyledMakeChat } from "./StyledMakeChat";

const MakeChat = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Modal searchTerm={searchTerm} setSearchTerm={setSearchTerm}>
      <FriendsListIcons searchTerm={searchTerm} />
      <SelectButton />
    </Modal>
  );
};

export default MakeChat;
