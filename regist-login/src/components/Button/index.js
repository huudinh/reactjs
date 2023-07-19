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
        [styles.disabled]: props.disabled,
    });
    
    return (
        <button className={classes} type="submit" disabled={props.disabled} >
            {props.children} 
        </button>
    )
}
export default Button;