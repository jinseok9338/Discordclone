import React, { useState } from 'react'
import Modal from '../../../ModalComponent/Modal'
import SendFriendsRequestButton from './SendFriendsRequestButton';
import SuggestedFriendsList from './SuggestedFriendsList';

function AddFriendsMenu() {
    const [friendTerm, setFriendTerm] = useState("");
    return (
        <Modal searchTerm={friendTerm} setSearchTerm={setFriendTerm}>
            <SuggestedFriendsList />
            <SendFriendsRequestButton/>
        </Modal>
    )
}

export default AddFriendsMenu
