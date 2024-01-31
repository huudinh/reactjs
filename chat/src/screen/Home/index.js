import clsx from 'clsx';
import styles from './Home.module.scss';
import TitleBar from "../../components/TitleBar";
import SideBar from "../../components/SideBar";
import InfoPanel from '../../components/InfoPanel';
import MessageArea from '../../components/MessageArea';
import { useState } from 'react';

const Home = () => {
    const [conversation, setConversation] = useState({});
    const conversationActive = (conversation) => {
        setConversation(conversation)
    }
    // console.log(conversation);

    return (
        <div className={clsx(styles.box)}>
            <SideBar conversationActive={conversationActive} />     
            <div className={clsx(styles.chatArea)}>
                <TitleBar conversation={conversation} />
                <div className={clsx(styles.main)}>
                    <MessageArea conversation={conversation} />
                    <InfoPanel />
                </div>
            </div>       
        </div>
    )
}

export default Home;