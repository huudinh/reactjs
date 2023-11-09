import clsx from 'clsx';
import styles from './ConversationModal.module.scss';
import Input from '../Input';
import Button from '../Button';
import { useState, useEffect } from "react";
import {useRef} from 'react';
import { collection, addDoc} from "firebase/firestore";
import { db, auth } from "../../firebase";

const ConversationModal = (props) => {
    const [formValues, setFormValues] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false); 
    const boxRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const createPost = async () => {
        const docRef = await addDoc(collection(db, "conversations"), {
            name: formValues.conversation,
            createBy: auth.currentUser.email,
            users: [auth.currentUser.email],
        });
        // console.log("Document written with ID: ", docRef);
     
        props.newConversationFnc({
            id:docRef.id,
            name: formValues.conversation,
            users: 1
        })
        props.handeCancel();
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            createPost();

        }
    }, [formErrors]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    // Validate Input Conversation
    const validate = (values) => {
        const errors = {};

        if (!values.conversation) {
            errors.conversation = "Please type to create Conversation!";
        }

        return errors;
    }

    const handleCancelBox = (e) => {
        if(e.target == boxRef.current){
            props.handeCancel();
        }
    }

    const handleCancel = () => {
        props.handeCancel();
    }

    return (
        <div className={clsx(styles.box)} onClick={handleCancelBox} ref={boxRef}>
            <form onSubmit={handleSubmit}>
                <Input
                    default
                    label="Conversation Name"
                    name="conversation"
                    value={formValues.conversation}
                    onChange={handleChange}
                    error={formErrors.conversation}
                    autoFocus 
                />
                <div className={clsx(styles.footer)}>
                    <Button warning type="Button" handleClick={handleCancel}>Cancel</Button>
                    <Button success type="Submit" >Create</Button>
                </div>
            </form>
        </div>
    )
}

export default ConversationModal;