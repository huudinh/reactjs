import clsx from 'clsx';
import styles from './InfoPanel.module.scss';
import Input from '../Input';
const InfoPanel = () => {
    return (
        <div className={clsx(styles.box)}>
            <form className={clsx(styles.input)}>
                <Input 
                    panel
                    holder="Enter User Email"
                    name="email" 
                />
            </form>
        </div>
    );
}

export default InfoPanel;