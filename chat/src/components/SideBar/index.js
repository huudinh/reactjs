import clsx from 'clsx';
import styles from './SideBar.module.scss';
import ConversationModal from "../ConversationModal";
import ConversationItem from '../ConversationItem';
import { useState, useEffect } from 'react';
import { collection,where, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";

const SideBar = (props) => {
    const [isConversation, setIsConversation] = useState(false);
    const [listConversationItem, setListConversationItem] = useState([]);
    const [conversation, setConversation] = useState({});
    const [conversationDeleteId, setConversationDeleteId] = useState();

    const handleClick = () => {
        setIsConversation(true);
    }

    const handeCancel = () => {
        setIsConversation(false);
    }

    const fetchPost = async () => {
        const querySnapshot = await getDocs(collection(db, "conversations"));
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, doc.data());

            const users = doc.data().users;
            const currentUser = auth.currentUser.email;

            // Check User logged in conversation
            const checkUser = users.some((item) => item === currentUser)

            // Reset Title
            conversationActive({});

            // Update conversation of User Logged
             if(checkUser){
                setListConversationItem(prev => {
                    return [...prev, {id:doc.id, name:doc.data().name, users:doc.data().users.length}]
                });
            }
            
        });
    }
    useEffect(() => {
        fetchPost();
    },[]);

    // Get conversation actived information
    const conversationActive = (info) => {
        setConversation(info);
    }

    // Delete the document
    const handleDeleteConversation = (id) => {        
        // Delete coversation item UI
        const newListConversation = listConversationItem.filter((item) => {
            return item.id !== id
        });
        setListConversationItem(newListConversation);
        
        // Update Conversation Id Deleted
        setConversationDeleteId(id);

        // Delete conversation item Firestore
        const docRef = doc(db, "conversations", id);
        deleteDoc(docRef);
    }

    // Update ConversationActive to screen Home
    useEffect(()=>{
        if (conversation.id !== conversationDeleteId){
            props.conversationActive(conversation);
        } else {
            props.conversationActive({
                id: '',
                name: '',
            })
        }
    },[conversation, conversationDeleteId]);

    // Update New Conversation to UI
    const newConversationFnc = (topic) => {
        setListConversationItem(prev => {
			return [topic, ...prev]
		})
    }

    return (
        <div className={clsx(styles.box)}>
            <div className={clsx(styles.new)}>
                <button className={clsx(styles.button)} onClick={handleClick}>New conversion</button>
            </div>
            {isConversation && <ConversationModal handeCancel={handeCancel} newConversationFnc={newConversationFnc} />}
            <div className={clsx(styles.list)}>
                {listConversationItem.map((item) => {
                    return (
                        <ConversationItem
                            key={item.id}
                            active = {conversation.id === item.id ? "active" : undefined}
                            handleDeleteConversation = { handleDeleteConversation }
                            id={item.id} name={item.name} noOfUser={item.users} conversationActive={conversationActive} />
                    );
                })}
            </div>
        </div>
    )
}

export default SideBar;