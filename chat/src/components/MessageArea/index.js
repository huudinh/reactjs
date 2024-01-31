import clsx from 'clsx';
import styles from './MessageArea.module.scss';
import Input from '../Input';
import { db } from "../../firebase";
import { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';


const MessageArea = (props) => {
    const [conversationId, setConversationId] = useState({});
    const [messages, setMessages] = useState([]);
    const {currentUser} = useContext(AuthContext);  
    
    useEffect(() => {
        setConversationId(props.conversation.id);
    });
    
    useEffect(() => {
        if(conversationId){
            fetchPost();
        }
        setMessages([]);
    },[conversationId]);

    const fetchPost = async () => {
        // Get conversationId From Home chat
        const q = query(
            collection(db, "messages"), 
            where("conversationId", "==", conversationId),
            orderBy("sentAt", "asc")
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            if(doc.data().conversationId === conversationId){
                setMessages(prev => {
                    return [...prev, {id:doc.id, content:doc.data().content, conversationId:doc.data().conversationId, sender:doc.data().sender}]
                });
            }
        });
    }

    return (
        <div className={clsx(styles.box)}>
            <div className={clsx(styles.list)}>
                <div className={clsx(styles.message)}>
                    {
                        messages.map(message => {
                            return (
                                <div 
                                    className={
                                        clsx(
                                            styles.messageItem, 
                                            currentUser.email === message.sender && styles.messageMyItem,
                                        )
                                    } 
                                    key={message.id}>
                                    <div 
                                        className={
                                            clsx(
                                                styles.messageBox, 
                                                currentUser.email === message.sender  && styles.messageMe,
                                                currentUser.email !== message.sender  && styles.messageYou,
                                            )
                                        }>
                                        <span className={clsx(styles.messageSender)}>{message.sender}</span>
                                        <div>{message.content}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <form className={clsx(styles.composer)}>
                <Input composer holder="Please be nice in the chat!" />
            </form>
        </div>
    );
}
export default MessageArea;