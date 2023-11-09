import clsx from 'clsx';
import styles from './TitleBar.module.scss';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const TitleBar = (props) => {
    const [title, setTitle] = useState('WELCOME CHAT!');
    const {currentUser} = useContext(AuthContext);    

    useEffect(()=>{
        document.title = title;
        if(props.conversation.name !== ''){
            setTitle(props.conversation.name);
        } else{
            setTitle('WELCOME CHAT!');
        }
    })
    return (
        <div className={clsx(styles.box)}>
            <div className={clsx(styles.title)}>{title}</div>
            <div className={clsx(styles.logout)} onClick={() => signOut(auth)}>{currentUser.displayName} (Logout)</div>
        </div>
    )
}

export default TitleBar;