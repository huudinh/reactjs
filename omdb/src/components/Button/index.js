import clsx from 'clsx';
import styles from './Button.module.scss';

function Button(props) {
    const classes = clsx(styles.btn, {
        [styles.default]: props.default,
        [styles.primary]: props.primary,
        [styles.success]: props.success,
        [styles.info]: props.info,
        [styles.warning]: props.warning,
        [styles.danger]: props.danger,
        [styles.soutline]: props.soutline,
        [styles.swarning]: props.swarning,
        [styles.square]: props.square,
        [styles.circle]: props.circle,
        [styles.disabled]: props.disabled,
    });
    
    return (
        <button className={classes} onClick={props.onClick} disabled={props.disabled} >
            {props.children} 
        </button>
    )
}
export default Button;