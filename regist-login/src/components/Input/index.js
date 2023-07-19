import clsx from 'clsx';
import styles from './Input.module.scss';

function Input(props) {
    const classes = clsx(styles.input,  {
        [styles.default]: props.default,
        [styles.primary]: props.primary,
        [styles.success]: props.success,
        [styles.info]: props.info,
        [styles.warning]: props.warning,
        [styles.danger]: props.danger,
        [styles.disabled]: props.disabled,
        [styles.error]:props.className
    });

    const feedback = clsx(styles.feedback);
    
    return (
        <>
            <label htmlFor={props.name}>{props.label}</label>
            <input
                id={props.name}
                name={props.name}
                type={props.type}
                placeholder={'Enter your ' + props.label}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
                className={classes}
            />
            {props.className && (
                <div className={feedback}>{props.errorMessage}</div>
            )}
        </>
    )
}
export default Input;