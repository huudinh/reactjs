import clsx from 'clsx';
import styles from './Home.module.scss';
import TitleBar from "../../components/TitleBar";
import SideBar from "../../components/SideBar";
import { useState } from 'react';

const Home = () => {
    const [conversation, setConversation] = useState({});
    const conversationActive = (conversation) => {
        setConversation(conversation)
    }

    return (
        <div className={clsx(styles.box)}>
            <SideBar conversationActive={conversationActive} />     
            <div className={clsx(styles.chatArea)}>
                <TitleBar conversation={conversation} />
                <div>
                    Message Area
                </div>
            </div>       
        </div>
    )
}

export default Home;