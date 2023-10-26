import clsx from 'clsx';
import styles from './SideBar.module.scss';
import ConversationModal from "../ConversationModal";
import { signOut } from "firebase/auth";
import { useState } from 'react';
import { auth } from "../../firebase";

const SideBar = () => {
    const [isConversation, setIsConversation] = useState(false);
    const handleClick = () => {
        setIsConversation(true);
    }

    const handeCancel = () => {
        setIsConversation(false);
    }

    return (
        <div className={clsx(styles.box)}>
            <button onClick={handleClick}>+ New</button>
            {isConversation && <ConversationModal handeCancel={handeCancel} />}
            <button onClick={() => signOut(auth)}>logout</button>
        </div>
    )
}

export default SideBar;