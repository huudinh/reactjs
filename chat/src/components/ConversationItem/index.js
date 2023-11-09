import clsx from 'clsx';
import styles from './ConversationItem.module.scss';

const ConversationItem = (props) => {
    const classes = clsx(styles.item,  {
        [styles.active]:props.active
    });

    const handleClick = () => {
        props.conversationActive({
            id: props.id,
            name: props.name,
        });
    }

    const handleDeleteConversation = () => {
        props.handleDeleteConversation(props.id);
    }

    return (
        <div className={classes}>
            <div className={clsx(styles.content)} onClick={handleClick} >
                <span>{props.name}</span>
                <span>{props.noOfUser} member</span>
            </div>
            <img
                src={require('../del.png')}
                alt="remove icon"
                className={clsx(styles.del)}
                onClick={handleDeleteConversation}
            />
        </div>
    )
}

export default ConversationItem;